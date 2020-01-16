import React from 'react'

export default function Todo({ todo }) {
  return (
    <h3>
      <input type="checkbox" checked={todo.complete} />
      <label>{todo.name}</label>
    </h3>
  )
}
