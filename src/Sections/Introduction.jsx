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
import { Link } from 'react-router-dom';

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
      I&apos;m currently a software engineer at INTEGRITY Security Services, LLC. This site
      is used to share my guitar arrangements and (eventually) other art and projects.
    </Typography>
  </Container>
);

export default Introduction;
