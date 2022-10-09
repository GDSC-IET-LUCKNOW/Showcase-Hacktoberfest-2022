import React from 'react'

import TodoItem from "../mycomponent/TodoItem"

const todos = (props) => {
  return (
    <div className="container">
      <h3>Todos list </h3>

      <TodoItem todo = {props.todos[0]} />


       






    </div>

  )
}

export default todos
