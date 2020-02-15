import React from 'react'
import ContentBox from './ContentBox'

/**
 * Creates a centered translucent box for holding content.
 * @param {*} props all props. Will overrride this component's defaults.
 */
const Section = (props) =>
  <ContentBox margin={{ top: 'small' }} pad='medium' {...props} />

export default Section
