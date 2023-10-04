import React from 'react';
import {
  Container,
  Typography,
} from '@material-ui/core';
import SimpleList from '../Components/SimpleList';

/**
 * Top-level section for the detailed "About Me" page.
 */
const About = () => (
  <Container maxWidth="sm">
    <Typography variant="h2">About Me</Typography>
    <Typography variant="body1">
      My resume will be available at the top of this page for download soon.
    </Typography>
    <Typography variant="h3">Education</Typography>
    <Typography variant="h4">
      <b>B.S. in Computer Science and Mathematics</b>
    </Typography>
    <Typography variant="subtitle2">
      <em>September 2017 &#8212; May 2021 at Northeastern University</em>
    </Typography>
    <Typography variant="body1"><b>Summary of Coursework</b></Typography>
    <SimpleList items={[
      'Computer science fundamentals, object-oriented design, AI, and other computer science classes',
      'Number theory, abstract algebra, real analysis, topology, and other mathematics',
      'Electives in linguistics, classical guitar playing, and espionage',
    ]}
    />
    <Typography variant="h3">Skills and Technologies</Typography>
    <SimpleList
      items={[
        <>
          <em>Languages: </em>
          {' '}
Javascript, HTML/CSS, Python, C#, Java
        </>,
        <>
          <em>Frameworks and Tools: </em>
          {' '}
React, AWS, MongoDB, RabbitMQ, Elasticsearch
        </>,
        <>
          <em>Tools: </em>
          {' '}
Bash, Git
        </>,
      ]}
    />
    <Typography variant="h3">Experience</Typography>
    <Typography variant="h4">
      <b>Software Engineer</b>
      {' '}
at INTEGRITY Security Services, LLC
    </Typography>
    <Typography variant="subtitle2">
      <em>January 2020 &#8212; August 2020 (Co-op), June 2021 &#8212; Present</em>
    </Typography>
    <SimpleList items={[
      'Developed client portal for Device Lifecycle Management (DLM) platform',
      'Assisted with complex platform deployments for bespoke customer configurations',
      'Fixed numerous bugs across full DLM portal stack',
      'Designed and developed monitoring system for DLM platform',
      'Designed automated alerting system integrating with OpenDistro for Elasticsearch',
      'Wrote declarative-style scripts to improve component deployment',
    ]}
    />
    <Typography variant="h4">
      <b>Software Engineer In Test Co-op</b>
      {' '}
at AIR Worldwide
    </Typography>
    <Typography variant="subtitle2"><em>January 2019 &#8212; June 2019</em></Typography>
    <SimpleList
      items={[
        'Developed C# test framework for company\'s flagship catastrophe modeling software',
        'Created implementation of testing framework for new product APIs',
        'Implemented framework steps for new product smoke test',
        'Increased framework unit test and functional test coverage',
        'Documented conventions and structure for framework\'s data access layer in README',
        'Implemented new framework steps to validate flagship product SQL database',
      ]}
    />

    <Typography variant="h3">Interests</Typography>
    <Typography variant="body1">
      Outside of work, I enjoy video games, books, and guitar playing.
    </Typography>
    <Typography variant="body1">
      I may upload a few arrangments that I&apos;ve written for solo classical guitar here.
      Or, if I ever record anything, that will be linked here as well.
    </Typography>
    <Typography variant="body1">
      I play a variety of games; the main source of fun I find in them
      is in the process of understanding and mastering new skills and systems.
    </Typography>
    <Typography variant="body1">
      My favorite books are
      {' '}
      <em>The Silmarillion</em>
,
      {' '}
      <em>Dune</em>
, and
      {' '}
      <em>The Sparrow</em>
.
    </Typography>
  </Container>
);

export default About;
