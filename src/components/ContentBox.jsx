import React from 'react'
import { Box } from 'grommet'

/**
 * Box intended to hold page content. Centers, creates a white translucent background,
 * default width `xlarge`, default height `large`, small padding and elevation.
 * @param {} props all other props, which will override this component's defaults.
 */
const ContentBox = (props) =>
  <Box
    alignSelf='center'
    background='neutral-1'
    height='medium'
    width='xlarge'
    pad='small'
    elevation='small'
    {...props}
  />

export default ContentBox
