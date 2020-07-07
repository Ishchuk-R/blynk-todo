import React, { useState, useEffect } from 'react';
import NewTodo from '../NewTodo';
import TodoList from '../TodoList';
import Comments from '../Comments';

import './App.scss'


const LOCAL_STORAGE_TODO = 'todo-list';
const LOCAL_STORAGE_ACTIVE_TODO = 'active-todo';
 const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]); 
  const [activeTodo, setActiveTodo] = useState<Todo | null>(null);

  useEffect(()=> {
    const storageTodo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TODO) || '');
    const storageActiveTodo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ACTIVE_TODO) || '');
    if (storageTodo){
      setTodos(storageTodo);
      setActiveTodo(storageActiveTodo);
    }
  }, []);

  useEffect(()=> {
    localStorage.setItem(LOCAL_STORAGE_TODO, JSON.stringify(todos));
    localStorage.setItem(LOCAL_STORAGE_ACTIVE_TODO, JSON.stringify(activeTodo));
    if (todos.length && !todos.find(todo=> todo.id === activeTodo?.id)) {
      setActiveTodo(todos[todos.length - 1]);
    }
  }, [todos, activeTodo]);


  
  const addTodo = (todo:Todo) => {
    setTodos([...todos, todo]);
  }

  const deleteItem = (id:number) => {
    setTodos(
      todos.filter((todo:Todo) => todo.id !== id)
    )
  }

  const handleActiveItem = (id:number)=> {
    const findTodo = todos.find(todo => todo.id === id) || todos[todos.length - 1];
    setActiveTodo(findTodo);
  }
  
  const newComment = (color:string, valueComment:string) => {
    const todoWithComment = todos.map(todo => {
      if(todo.id === activeTodo?.id){
        const activeTodo: Todo = {
          ...todo,
          comments: [...todo.comments, {color:color, valueComment: valueComment} ]
        } 
        setActiveTodo(activeTodo);
        
        return activeTodo
      }
      return todo
    })
    setTodos(todoWithComment);
  }

  return (
    <div className="container-app">
      <div className="block todo-app">
        <h4 className="block-title">Items</h4> 
        <NewTodo addTodo={addTodo}/>
        <TodoList activeId={activeTodo?.id} handleActiveItem={handleActiveItem} deleteItem={deleteItem} todos={todos}/> 
      </div>
      <Comments newComment={newComment} activeTodo={activeTodo} />
    </div>
  )
}


export default App;