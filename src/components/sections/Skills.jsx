import React from 'react'
import Section from '../wrapper/Section'
import Heading2 from '../wrapper/Heading2'
import { List } from 'grommet'


/**
 * `Section` that displays a list of my skills.
 * @param {*} props any props to customize this `Section`.
 */
const Skills = (props) =>
  <Section {...props}>
    <Heading2>Skills</Heading2>
    <List
      primaryKey='title'
    />
  </Section>

export default Skills
