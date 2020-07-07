import React from 'react';
import cn from 'classnames';
import './TodoItem.scss';


type Props = {
  id: number, 
  value:string, 
  activeId: number | undefined,
  comments: CommentItem[],
  deleteItem: (id:number)=> void, 
  handleActiveItem: (id:number) => void
}

const TodoItem = ({id, value, comments, activeId, deleteItem, handleActiveItem}:Props) => {

  return (
    <div className={cn('todo-item', {'active': activeId === id})} >
      <div className="todo-input-value"  onClick={() =>handleActiveItem(id)}>{value}</div> 
      <div className="todo-item-info">
        <span className="count-comments">{comments.length}</span>
        <span className="btn btn-danger" onClick={() => deleteItem(id)}>Delete</span>
      </div>
    </div>
  )
}

export default TodoItem;