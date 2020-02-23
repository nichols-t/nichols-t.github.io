import React from 'react'
import { Main as MainG } from 'grommet'
import background from '../../media/background'

/**
 * Wraps Grommet's `Main` component with a default background
 * @param {*} props all of the props for the `grommet` `Main` component
 */
const Main = (props) => <MainG background={background} {...props} />

export default Main
