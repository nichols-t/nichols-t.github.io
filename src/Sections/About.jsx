import React from 'react';
import {
  Container,
  Typography,
} from '@material-ui/core';

/**
 * Top-level section for the detailed "About Me" page.
 */
const About = () => (
  <Container maxWidth="sm">
    <Typography variant="h2">About Me</Typography>
    <Typography variant="body1">
      My resume will be available at the top of this page for download soon.
    </Typography>
    <Typography variant="body1">
This page will include some more detailed about information, most likely a CV,
resume, and skills sections of some kind. The home page should have some of the
same information, but this route will contain the most detail.
    </Typography>
    <Typography variant="h3">Education</Typography>
    <Typography variant="body1">
This section will contain a brief overview of
    my education and coursework, along with a link to a full CV once I make one.
    </Typography>
    <Typography variant="h3">Skills and Technologies</Typography>
    <Typography variant="body1">
      This section will contain a list of technologies that I&apos;ve worked with and
      skills that I&apos;ve developed.
    </Typography>
    <Typography variant="h3">Experience</Typography>
    <Typography variant="body1">
      This section will contain my past professional experience.
    </Typography>
    <Typography variant="h3">Interests</Typography>
    <Typography>
      This section will contain a brief line or paragraph about my out-of-work hobbies
      and interests.
    </Typography>
  </Container>
);

export default About;
