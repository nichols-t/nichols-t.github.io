import React from 'react';
import {
  Container,
  Button,
  List,
  Typography,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import uniqid from 'uniqid';

const toDo = [
  'Add detail on About page',
  'Add projects on Projects page',
  'Add a picture somewhere',
];

/**
 * This section serves as the site's homepage.
 */
const Introduction = () => (
  <Container maxWidth="sm">
    <Typography variant="h2">About Me</Typography>
    <Typography variant="body1">
      I&apos;m currently a junior at Northeastern Unviersity, studying Mathematics
      and Computer Science. I will include more detailed information soon, of course.
    </Typography>
    <Typography variant="body1">
      I promise that the links I have will function! I will be working on this site
      over a period of time, and it&apos;s not finished yet.
    </Typography>
    <Button>This button does nothing</Button>
    <Typography variant="h2">Things To Do</Typography>
    <List>
      {toDo.map((toDoString) => (
        <ListItem key={uniqid()}>
          <ListItemText primary={toDoString} />
        </ListItem>
      ))}
    </List>
  </Container>
);

export default Introduction;
