import React from 'react'
import { Header, Anchor } from 'grommet'
import { Home } from 'grommet-icons'

/**
 * Contains navigation links.
 */
const HeaderBar = () =>
  <Header height='xxsmall' justify='end' align='center'>
    <Anchor fill='vertical' margin='small' hoverIndicator icon={<Home color='light-2' />} href='index.html' />
  </Header>

export default HeaderBar
