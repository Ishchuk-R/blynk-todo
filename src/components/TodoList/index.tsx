import React from 'react';
import TodoItem from '../TodoItem'

type Props = {
  todos: Todo[],
  deleteItem: (id:number)=> void, 
  handleActiveItem: (id:number) => void,
  activeId: number | undefined,
}

const TodoList = ({todos, deleteItem, activeId, handleActiveItem}:Props) => {
  return (
    <>
    {todos.map((todo)=>(
        <TodoItem activeId={activeId} handleActiveItem={handleActiveItem}  deleteItem={deleteItem} key={todo.id} {...todo}/>
      ))}
    </>
  )
}

export default TodoList;