import React from 'react'
import { Heading } from 'grommet'
import PropTypes from 'prop-types'

const PageTitle = ({ children }) =>
  <Heading color='light-1' alignSelf='center' elevation='large'>{children}</Heading>

PageTitle.propTypes = {
  children: PropTypes.any
}

export default PageTitle
