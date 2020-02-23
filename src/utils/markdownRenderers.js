import React from 'react'
import Heading from '../components/wrapper/Heading'
import Paragraph from '../components/wrapper/Paragraph'

/** Renders the headings as my `Heading` components. */
const MdHeading = (props) => {
  console.dir(props)
  if (props.level !== 1) {
    return <Heading level={props.level + 1}>{props.children}</Heading>
  } else {
    return null
  }
}

const MdParagraph = (props) => {
  return <Paragraph>{props.children}</Paragraph>
}

const markdownRenderers = {
  heading: MdHeading,
  paragraph: MdParagraph
}

export default markdownRenderers
