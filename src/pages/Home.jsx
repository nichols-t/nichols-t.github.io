import React from 'react';
import { Paragraph, Main, Heading } from 'grommet';
import HeaderBar from '../header/Header';

const HomePage = () => <Main as="body" fill="true" background="brand">
    <HeaderBar />
    <Heading color="light1" alignSelf="center">Ty Nichols</Heading>
    <Paragraph color="light-1" alignSelf="center">Hello world! This is my website</Paragraph>
</Main>

export default HomePage;