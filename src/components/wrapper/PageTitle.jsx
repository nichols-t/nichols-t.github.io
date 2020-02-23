import React from 'react'
import { Heading } from 'grommet'
import PropTypes from 'prop-types'

/**
 * Title that creates a white, centered Heading.
 * @param {*} props all other props, which will override this component's defaults.
 */
const PageTitle = (props) =>
  <Heading color='light-1' alignSelf='center' {...props} />

PageTitle.propTypes = {
  children: PropTypes.any
}

export default PageTitle
