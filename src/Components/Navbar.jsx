import React from 'react';
import { Grid, Button, Typography } from '@material-ui/core';

const Navbar = () => (
  <Grid container justify="center" alignItems="flex-end">
    <Grid item>
      <Button>
            Projects
      </Button>
    </Grid>
    <Grid item>
      <Typography variant="h1">Ty Nichols</Typography>
    </Grid>
    <Grid item>
      <Button>Home</Button>
      <Button>About</Button>
    </Grid>
  </Grid>
);

export default Navbar;
