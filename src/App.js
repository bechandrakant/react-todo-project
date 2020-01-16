import React, { useState, useRef } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  function handleAddTodos() {
    const name = todoNameRef.current.value;
    if (name === '') return;
    setTodos(prevTodos => {
      return [...prevTodos, { id: 1, name: name, complete: false }];
    })
    todoNameRef.current.value = null;
  }

  return (
    <>
      <TodoList todos={todos} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodos}>Add Todo</button>
      <button>Clear completed todo</button>
      <div>0 todos left</div>
    </>
  );
}

export default App;
