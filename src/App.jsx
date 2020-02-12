import React from 'react';
import { Grommet, Box } from 'grommet';
import theme from './theme';
import HomePage from './pages/Home';

const AppBar = (props) => (
  <Box
  tag='header'
  direction='row'
  align='center'
  justify='between'
  background='brand'
  pad={{ left: 'medium', right: 'small', vertical: 'small'}}
  elevation='medium'
  style={{ zIndex: 1 }}
  {...props}
  />
);

const App = () => {
  return (
    <Grommet theme={theme}>
      <HomePage />
      </Grommet>
  );
}

export default App;
