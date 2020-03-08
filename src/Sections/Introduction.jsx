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
  'Add Routing! Make navigation useful!',
  'Add Personal Intro content',
  'Add Skills content (or something similar)',
  'Add Projects page',
  'Add Resume link and other social links',
];

const Introduction = () => (
  <Container maxWidth="sm">
    <Typography variant="h2">About Me</Typography>
    <p>
      I&apos;m currently a junior at Northeastern Unviersity, studying Mathematics
      and Computer Science. I will include other interesting information about
      myself here when I find time and desire to write down the meaninglessness
      that I enjoy.
    </p>
    <p>
      I promise that the links I have will function! I will be working on this site
      over a period of time, and it&apos;s not finished yet.
    </p>
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
