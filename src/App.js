import React from 'react';
import { Grommet, Box } from 'grommet';
import theme from './theme';

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
      <AppBar>Hello Grommet!</AppBar>
      </Grommet>
  );
}

export default App;
