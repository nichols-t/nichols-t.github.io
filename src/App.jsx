import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { Switch, Route } from 'react-router-dom';
import theme from './theme';
import Navbar from './Components/Navbar';
import Introduction from './Sections/Introduction';
import Projects from './Sections/Projects';
import About from './Sections/About';
import CircleMethod from './Sections/CircleMethod';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Alert severity="warning">
        <AlertTitle>Greetings, traveller.</AlertTitle>
        This site is far from complete; please check back soon.
      </Alert>
      <Navbar />
      <Switch>
        <Route path="/projects" exact>
          <Projects />
        </Route>
        <Route path="/" exact>
          <Introduction />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/circlemethod" exact>
          <CircleMethod />
        </Route>
      </Switch>
    </MuiThemeProvider>
  );
}

export default App;
