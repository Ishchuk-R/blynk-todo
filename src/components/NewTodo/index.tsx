import React, { useState } from 'react';
import './NewTodo.scss'

type Props = {
  addTodo: (todo:Todo)=>void
}

const NewTodo = ({addTodo}: Props) => {
  const [value, setValue] = useState('');
  const todo = {
   id: '',
   active: false,
   value: '',
   comments: [], 
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const handleSubmitNewTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo({...todo, value: value, id: Math.floor(Math.random() * 1000000000)});
    setValue('');
  }

  return(
    <form className="form-add-item" onSubmit={handleSubmitNewTodo}>
      <input
        required
        value={value}
        onChange={handleInputChange}
        className="form-input new-todo"
        placeholder="Type name here..."
      />
      <button className="btn btn-primary">Add New</button>
  </form>
  )
}
export default NewTodo;