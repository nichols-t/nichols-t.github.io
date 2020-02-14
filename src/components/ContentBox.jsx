import React from 'react'
import { Box } from 'grommet'
import PropTypes from 'prop-types'

/**
 * Box intended
 */
const ContentBox = ({ children }) =>
  <Box
    align='center'
    alignSelf='center'
    background='neutral-1'
    height='medium'
    width='xlarge'
    alignContent='center'
    pad='small'
    elevation='small'
  >
    {children}
  </Box>

ContentBox.propTypes = {
  children: PropTypes.any
}
export default ContentBox
