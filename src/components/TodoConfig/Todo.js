import React, { useState } from 'react';
import { List, ListItem, ListItemAvatar, ListItemText, Modal } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import db from '../FirebaseConfig/Firebase';

import { Container } from './styles';

function Todo(props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Container>
      <>
        <Modal 
          open={open}
          onClose={e => setOpen(false)}
        >
          <div>
            <h1>Open</h1>
            <button onClick={e => setOpen(false)}></button>
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