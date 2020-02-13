import React from 'react';
import { Paragraph, Main, Heading } from 'grommet';
import HeaderBar from '../header/Header';
import newportsunset from './../media/newport-sunset-blur.png';

const HomePage = () => <Main as="body" background={{ image: `url(${newportsunset})` }} style={{ minHeight: '100vh' }}>
    <HeaderBar />
    <Heading color="light-1" alignSelf="center">Ty Nichols</Heading>
    <Paragraph fill={true} color="light-1" alignSelf="center"><em>Greeings, traveller. This website is unfinished. Please check back later.</em></Paragraph>
</Main>

export default HomePage;