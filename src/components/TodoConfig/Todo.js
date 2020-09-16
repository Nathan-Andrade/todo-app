import React from 'react';
import { List, ListItem, ListItemAvatar, ListItemText, Button } from '@material-ui/core';
import db from '../FirebaseConfig/Firebase';

import { Container } from './styles';

function Todo(props) {
  return (
    <Container>
      <List className="todo_list">
        <ListItem>
          <ListItemAvatar>
            
          </ListItemAvatar>
          <ListItemText primary={props.todo.todo} secondary="Don't forget 🕐" />
        </ListItem>
        <Button onClick={event => {
            db.collection('todos').doc(props.todo.id).delete()
          }}
        >
          ❌ DELETE
        </Button>
      </List>
    </Container>
  )
}

export default Todo;