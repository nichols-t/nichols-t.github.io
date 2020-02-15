import React from 'react'
import { Main } from 'grommet'
import HeaderBar from '../components/Header'
import newportsunset from './../media/newport-sunset-blur.png'
import Section from '../components/Section'
import PageTitle from '../components/PageTitle'
import Subtitle from '../components/Subtitle'
import Paragraph from '../components/Paragraph'
import Heading2 from '../components/Heading2'
import Notice from '../components/Notice'

/**
 * Default page for the site. Should hold all of the basic information, including the About section.
 */
const HomePage = () =>
  <Main background={{ image: `url(${newportsunset})` }}>
    {/** Have yet to decide how useful this will actually be. */}
    <HeaderBar />
    {/** Leave this notice up until page is actually finished. */}
    <Notice>Greetings, traveller. This page is unfinished. Please stop by later.</Notice>
    <PageTitle>Ty Nichols</PageTitle>
    <Subtitle>
      Computer Science and Mathematics student at Northeastern University.
    </Subtitle>
    <Section height='large'>
      <Heading2>About Me</Heading2>
      <Paragraph>
        I'm currently a junior at Northeastern Unviersity, studying Mathematics
        and Computer Science. I will include other interesting information about
        myself here when I find time and desire to write down the meaninglessness
        that I enjoy.
      </Paragraph>
    </Section>
  </Main>

export default HomePage
