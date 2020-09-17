import React, { useState } from 'react';
import { List, ListItem, ListItemAvatar, ListItemText, Modal, Button } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';

import db from '../FirebaseConfig/Firebase';

import { Container } from './styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();

  //função para abrir
  const handleOpen = () => {
    setOpen(true);
  };

  //função para atualizar (modificar) o TODO with the new input text
  const updateTodo = () => {
    db.collection('todos').doc(props.todo.id).set({
      todo: input
    }, { merge: true });

    setOpen(false);
  }

  return (
    <Container>
      <>
        <Modal 
          open={open}
          onClose={e => setOpen(false)}
        >
          <div className={classes.paper}>
            <h1>Update your Todo</h1>
            <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}  />
            <Button onClick={updateTodo}>Update TODO</Button>
          </div>
        </Modal>
        <List className="todo_list">
          <ListItem>
            <ListItemAvatar>
              
            </ListItemAvatar>
            <ListItemText primary={props.todo.todo} secondary="Don't forget 🕐" />
          </ListItem>
          <button onClick={e => setOpen(true)}>Edit</button>
          <DeleteForeverIcon onClick={event => {
              db.collection('todos').doc(props.todo.id).delete()
            }}
          />
        </List>
      </>
    </Container>
  )
}

export default Todo;