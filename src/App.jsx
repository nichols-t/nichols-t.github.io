import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Typography } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import theme from './theme';
import Navbar from './Components/Navbar';
import Introduction from './Sections/Introduction';
import Guitar from './Sections/Guitar';
import Spoiler from './Components/Spoiler';
import PDFLink from './Components/PDFLink';
import FinalCatch from './pdf/Final_Catch.pdf';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Switch>
        <Route path="/guitar" exact>
          <Guitar />
        </Route>
        <Route path="/" exact>
          <Introduction />
        </Route>
        {/* <Route path="/about" exact>
          <AboutMinimal />
        </Route> */}
        <Spoiler
          spoils="The Legend of Zelda: Tears of the Kingdom"
        >
          <Typography variant="h3">
            <PDFLink to={FinalCatch}>
      Final Catch from
              {' '}
              <em>The Legend of Zelda: Tears of the Kingdom</em>
            </PDFLink>
          </Typography>
        </Spoiler>

      </Switch>
    </MuiThemeProvider>
  );
}

export default App;
