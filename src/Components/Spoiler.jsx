import React from 'react';
import {
  Container,
  Button,
  Typography,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

/**
 * This section serves as the site's homepage.
 */
const Spoiler = ({ spoils, children }) => {
  const [spoiled, setSpoiled] = React.useState(false);
  const history = useHistory();

  return (
    <Container maxWidth="sm">
      {!spoiled && (
        <>
          <Typography variant="h2">SPOILER WARNING</Typography>
          <Typography variant="body1">
      The content you clicked may be spoilers for
            {' '}
            <em>
              {spoils}
            </em>
. Are you sure you want to view it?
          </Typography>
          <Button onClick={() => history.goBack()}>No, take me back</Button>
          <Button onClick={() => setSpoiled(true)}>I&apos;m Sure</Button>
        </>
      )}
      {spoiled && children}
    </Container>
  );
};

export default Spoiler;
