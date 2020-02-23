import React from 'react'
import { Text } from 'grommet'
import PropTypes from 'prop-types'

/**
 * Subtitle that renders text as white, centered, and italicized with a margin beneath.
 * @param {*} props any child component props, which will override this component's props.
 */
const Subtitle = (props) =>
  <Text
    color='light-1'
    alignSelf='center'
    margin={{ bottom: 'large' }}
    {...props}
    children={<em>{props.children}</em>}
  />

Subtitle.propTypes = {
  children: PropTypes.any
}

export default Subtitle
