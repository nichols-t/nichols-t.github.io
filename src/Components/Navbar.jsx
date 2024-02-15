import React from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

// TODO removing experience, even minified version, for now.
/**
 *       <Grid item>
        <Button component={Link} to="/about">About</Button>
      </Grid>


 */

const Navbar = () => (
  <div className="navbar">
    <Grid container justify="center" alignItems="flex-end">
      <Typography variant="h1">Ty Nichols</Typography>
    </Grid>
    <Grid container justify="center" alignItems="flex-end">
      <Grid item>
        <Button component={Link} to="/guitar">Guitar</Button>
      </Grid>
      <Grid item>
        <Button component={Link} to="/">Home</Button>
      </Grid>
    </Grid>
  </div>
);

export default Navbar;
