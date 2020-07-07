import React, { useState, useEffect, useCallback } from 'react';
import './Comments.scss'

type Props = {
  activeTodo: Todo | null,
  newComment: (color:string, valueComment:string)=> void
}

 const Comments = ({activeTodo, newComment}:Props) => {
   let id: number = 0;  
   let comments: CommentItem[] = []; 
   if (activeTodo) {
     id = activeTodo.id;
     comments = activeTodo.comments;
   }

   const [valueComment, setValueComment] = useState('');
   const [color, setColor] = useState('#000');
    const onKeypress = useCallback((e) => {
      if (e.code === 'Enter' && e.ctrlKey) {
        newComment(color, valueComment);
        setValueComment("");
        setColor('#000');
      }
    }, [color, valueComment, newComment]);
    useEffect(() => {
      document.addEventListener('keypress', onKeypress);
      return () => {
        document.removeEventListener('keypress', onKeypress);
      };
    }, [onKeypress]);

  const handleValueComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueComment(e.target.value);

  }
  const handleChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  }
  const handleNewComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    newComment(color, valueComment);
    setValueComment('');
    setColor('#000');
  }

  return (
    <div className="block">
      <h4 className="block-title">Comments #{id} </h4>
      {comments.map(({color, valueComment}:CommentItem) => (
          <div key={color+valueComment} className="comments-item">
            <input disabled className="color" type="color" value={color}/>
            <span className="comment-value">{valueComment}</span>
          </div>
      ))}

      <form className="form-add-comment" onSubmit={handleNewComment}>
        <input className="color" value={color} onChange={handleChangeColor} type="color"/>
        <input className="color-text" required value={valueComment} onChange={handleValueComment} type="text"/>
        <button className="btn btn-primary">Add new</button> 
      </form>
    </div>
  )
}


export default Comments;