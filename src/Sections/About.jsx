import React from 'react';
import {
  Container,
  Typography,
} from '@material-ui/core';

const About = () => (
  <Container maxWidth="md">
    <Typography variant="h2">About Me</Typography>
    <Typography variant="body1">
This page will include some more detailed about information, most likely a CV,
resume, and skills sections of some kind. The home page should have some of the
same information, but this route will contain the most detail.
    </Typography>
  </Container>
);

export default About;
