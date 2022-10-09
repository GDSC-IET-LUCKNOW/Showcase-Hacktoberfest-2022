import React from 'react'

const TodoItem = ({todo}) => {
  return (
    <div>
      <h4>{todo.title} </h4>
      <p>{todo.desc}</p>
    </div>
  )
}

export default TodoItem
