import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import theme from './theme';
import Navbar from './Components/Navbar';
import Introduction from './Sections/Introduction';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Alert severity="warning">
        <AlertTitle>Greetings, traveller.</AlertTitle>
        This site is far from complete; please check back soon.
      </Alert>
      <Navbar />
      <Introduction />
    </MuiThemeProvider>
  );
}

export default App;
