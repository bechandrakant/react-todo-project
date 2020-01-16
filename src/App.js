import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  function handleAddTodos() {

  }

  return (
    <>
      <TodoList todos={todos} />
      <input type="text" />
      <button onClick="{handleAddTodos}">Add Todo</button>
      <button>Clear completed todo</button>
      <div>0 todos left</div>
    </>
  );
}

export default App;
