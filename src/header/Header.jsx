import React from 'react';
import { Header, Anchor, Button } from 'grommet';
import { Home } from 'grommet-icons';

const HeaderBar = () => <Header height="xxsmall" justify="end" align="center">
    <Anchor as={Button} fill="vertical" margin="small" hoverIndicator icon={<Home color="light-2"/>} href="index.html"/>
</Header>;

export default HeaderBar;