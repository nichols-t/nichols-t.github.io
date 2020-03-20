import React from 'react';
import {
  Container,
  Typography,
  Link,
} from '@material-ui/core';

const Projects = () => (
  <Container maxWidth="sm">
    <Typography variant="h2">Projects</Typography>
    <Typography variant="body1">
        I will be adding a nice list of projects that I&apos;ve done on this page.
        For now, check out my
      {' '}
      <Link
        href="https://github.com/nichols-t/nichols-t.github.io"
        target="_blank"
        rel="noopener"
      >
Github
      </Link>
    </Typography>
  </Container>
);

export default Projects;
