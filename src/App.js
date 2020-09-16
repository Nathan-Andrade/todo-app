import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import firebase from 'firebase';

import './App.css';

import Todo from './components/TodoConfig/Todo';
import db from './components/FirebaseConfig/Firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // quando o app carregar, ouvirá o database
  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ( {id: doc.id ,todo: doc.data().todo})))
    })
  }, []);

  // constante usada para adicionar um novo TODO
  const addTodo = (event => {
    //this will fire off when we click the button
    event.preventDefault();

    // add todos to database
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    //setTodos([...todos, input]);
    setInput(''); //limpa o campo assim que clica no botão
  })

  return (
    <div className="App">
      <h1>TODO for help you !</h1>

      <form>
        <FormControl>
          <InputLabel>Write a TODO</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="secondary">
          Add TODO
        </Button>
      </form>

      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
