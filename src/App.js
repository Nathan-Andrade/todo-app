import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Take dogs for walk', 'Take dogs for running', 'hi programmers']);
  const [input, setInput] = useState('');

  // constante usada para adicionar um novo TODO
  const addTodo = (event => {
    //this will fire off when we click the button
    event.preventDefault();
    setTodos([...todos, input]);
    setInput('');
  })

  return (
    <div className="App">
      <h1>Creating a TODO App!</h1>
      <form>
        <input value={input} onChange={event => setInput(event.target.value)} />
        <button type="submit" onClick={addTodo}>Add Todo</button>
      </form>

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
