import React from 'react';
import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';

import { Container } from './styles';

function Todo(props) {
  return (
    <Container>
      <List className="todo_list">
        <ListItem>
          <ListItemAvatar>
            
          </ListItemAvatar>
          <ListItemText primary={props.text} secondary="Don't forget" />
        </ListItem>
      </List>
    </Container>
  )
}

export default Todo;