import React from 'react'
import Heading from '../components/wrapper/Heading'
import Paragraph from '../components/wrapper/Paragraph'
import List from '../components/wrapper/List'
import PropTypes from 'prop-types'

/** Renders the headings as my `Heading` component. */
const MdHeading = (props) => {
  if (props.level !== 1) {
    return <Heading level={props.level + 1}>{props.children}</Heading>
  } else {
    return null
  }
}

/** Renders a paragraph as my `Paragraph`. */
const MdParagraph = (props) => {
  return <Paragraph>{props.children}</Paragraph>
}

MdParagraph.propTypes = {
  children: PropTypes.any.isRequired
}

const MdList = (props) => {
  return <List {...props} ordered={props.ordered} />
}

MdList.propTypes = {
  ordered: PropTypes.bool.isRequired
}

const markdownRenderers = {
  heading: MdHeading,
  paragraph: MdParagraph,
  list: MdList
}

export default markdownRenderers
