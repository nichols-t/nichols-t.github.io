import theme from './theme'
import React from 'react'
import { Grommet } from 'grommet'
import HomePage from './pages/Home'

const App = () => {
  return (
    <Grommet theme={theme}>
      <HomePage />
    </Grommet>
  )
}

export default App
