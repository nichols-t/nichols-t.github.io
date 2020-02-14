import React from 'react'
import { Paragraph, Main } from 'grommet'
import HeaderBar from '../components/Header'
import newportsunset from './../media/newport-sunset-blur.png'
import ContentBox from '../components/ContentBox'
import PageTitle from '../components/PageTitle'
import { Alert } from 'grommet-icons'

const HomePage = () =>
  <Main as='body' background={{ image: `url(${newportsunset})` }} style={{ minHeight: '100vh' }}>
    <HeaderBar />
    <PageTitle>Ty Nichols</PageTitle>
    <Paragraph fill color='light-1' alignSelf='center'>
      <Alert color='light-2' /><em> Greeings, traveller. This website is unfinished. Please check back later.</em>
    </Paragraph>
    <ContentBox pad='large'>
      <Paragraph>
        This is a content box. It's just a box with some default formatting. But it does look nice! Maybe someday there
        will be useful text in here. But probably not.
      </Paragraph>
    </ContentBox>
  </Main>

export default HomePage
