import React from 'react';
import {
  Container,
  Typography,
} from '@material-ui/core';
import SimpleList from '../Components/SimpleList';

/**
 * Top-level section for the "About Me" page. Few details
 */
const About = () => (
  <Container maxWidth="sm">
    <Typography variant="h2">About Me</Typography>
    <Typography variant="h3">Education</Typography>
    <Typography variant="h4">
      <b>B.S. in Computer Science and Mathematics</b>
    </Typography>
    <Typography variant="subtitle2">
      <em>September 2017 &#8212; May 2021 at Northeastern University</em>
    </Typography>
    <Typography variant="h3">Experience</Typography>
    <Typography variant="h4">
      <b>Software Engineer</b>
      {' '}
at INTEGRITY Security Services, LLC
    </Typography>
    <Typography variant="subtitle2">
      <em>January 2020 &#8212; August 2020 (Co-op), June 2021 &#8212; Present</em>
    </Typography>
    <Typography variant="h4">
      <b>Software Engineer In Test Co-op</b>
      {' '}
at AIR Worldwide
    </Typography>
    <Typography variant="subtitle2"><em>January 2019 &#8212; June 2019</em></Typography>
    <Typography variant="h3">Interests</Typography>
    <Typography variant="body1">
      Outside of work, I enjoy video games, stories, art, and guitar playing.
    </Typography>
  </Container>
);

export default About;
