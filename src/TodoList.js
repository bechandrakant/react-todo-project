import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos }) {
  return (
    todos.map(todo => <Todo key="todo" todo={todo} />)
  )
}
