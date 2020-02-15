import React from 'react'
import { Alert } from 'grommet-icons'
import Subtitle from './Subtitle'
import PropTypes from 'prop-types'
import { Paragraph, Box } from 'grommet'

/**
 * Displays a notice designed to attract the user's attention.
 * @param {*} props the React element props, passed to Grommet's `Subtitle`
 */
const Notice = (props) =>
  <Box
    flex='shrink'
    alignSelf='center'
    background='accent-1'
    height='xsmall'
    pad='small'
    round='xsmall'
  >
    <Subtitle {...props}>
      <Paragraph
        fill
        textAlign='center'
      >
        <Alert color='light-2' /> {props.children}
      </Paragraph>
    </Subtitle>
  </Box>

Notice.propTypes = {
  children: PropTypes.any
}

export default Notice
