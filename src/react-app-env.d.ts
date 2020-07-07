interface CommentItem {
  color: string,
  valueComment: string,
}

interface Todo {
  id: number,
  active: boolean,
  value: string,
  comments: CommentItem[],
}
