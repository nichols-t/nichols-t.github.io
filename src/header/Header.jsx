import React from 'react';
import { Header, Button } from 'grommet';
import { Home } from 'grommet-icons';

const HeaderBar = () => <Header height="xxsmall" background="brand">
    <Button fill="vertical" margin="small" hoverIndicator icon={<Home color="light-2"/>} />
</Header>;

export default HeaderBar;