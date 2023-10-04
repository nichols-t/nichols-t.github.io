import React from 'react';
import {
  Container,
  Typography,
  Link,
} from '@material-ui/core';

function ProjectContainer({ title, children }) {
  return (
    <>
      <Typography variant="h3">{ title }</Typography>
      <Typography variant="body1">
        { children }
      </Typography>

    </>
  );
}

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
    <ProjectContainer
      title="Pokemon: the Drinking Game"
    >
      A drinking game inspired by Pokemon duels. We only playtested this once, using
      {' '}
      <Link href="https://drive.google.com/drive/folders/168Vasv26XRMmdme931iFOebZTQi4NYEJ?usp=sharing">
        this draft of the rules
      </Link>
.
    </ProjectContainer>
  </Container>
);

export default Projects;
