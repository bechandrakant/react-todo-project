import React from 'react'

export default function Todo({ todo, toggleTodo }) {

  function handleToggleTodo() {
    toggleTodo(todo.id);
  }

  return (
    <h3>
      <input type="checkbox" checked={todo.complete} onChange={handleToggleTodo} />
      <label>{todo.name}</label>
    </h3>
  )
}
