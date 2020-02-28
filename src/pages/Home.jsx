import Main from '../components/wrapper/Main'
import React from 'react'
import HeaderBar from '../components/wrapper/Header'
import Heading from '../components/wrapper/Heading'
import Notice from '../components/Notice'
import PageTitle from '../components/wrapper/PageTitle'
import Paragraph from '../components/wrapper/Paragraph'
import Section from '../components/wrapper/Section'
import Subtitle from '../components/wrapper/Subtitle'
import Skills from '../components/sections/Skills'

/**
 * Default page for the site. Should hold all of the basic information, including the About section.
 */
const HomePage = () =>
  <Main>
    {/** Have yet to decide how useful this will actually be. */}
    <HeaderBar />
    {/** Leave this notice up until page is actually finished. */}
    <Notice>Greetings, traveller. This page is unfinished. Please stop by later.</Notice>
    <PageTitle>Ty Nichols</PageTitle>
    <Subtitle>
      Computer Science and Mathematics student at Northeastern University.
    </Subtitle>
    {/** Not worth abstracting this Section since I don't plan to reuse it. */}
    <Section height='xlarge'>
      <Heading level={2}>About Me</Heading>
      <Paragraph>
        I'm currently a junior at Northeastern Unviersity, studying Mathematics
        and Computer Science. I will include other interesting information about
        myself here when I find time and desire to write down the meaninglessness
        that I enjoy.
      </Paragraph>
    </Section>
    <Skills />
  </Main>

export default HomePage
