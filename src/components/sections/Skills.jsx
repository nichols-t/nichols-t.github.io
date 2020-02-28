import React, { useState, useEffect } from 'react'
import Section from '../wrapper/Section'
import Heading from '../wrapper/Heading'
import { List } from 'grommet'
import SkillsMarkdown from '../..//data/skills.md'
import ReactMarkdown from 'react-markdown'
import markdownRenderers from '../../utils/markdownRenderers'

/**
 * `Section` that displays a list of my skills.
 * @param {*} props any props to customize this `Section`.
 */
const Skills = (props) => {
  const [data, setData] = useState('')

  useEffect(() => {
    fetch(SkillsMarkdown).then(response => {
      return response.text()
    }).then(text => {
      setData(text)
    })
  })

  return (
    <Section {...props} height='xlarge'>
      <Heading level={2}>Skills</Heading>
      <List
        primaryKey='title'
      />
      <ReactMarkdown source={data} renderers={markdownRenderers} />
    </Section>)
}

export default Skills
