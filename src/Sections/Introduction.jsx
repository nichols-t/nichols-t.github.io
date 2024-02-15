import React from 'react';
import {
  Container,
  Typography,
} from '@material-ui/core';

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
