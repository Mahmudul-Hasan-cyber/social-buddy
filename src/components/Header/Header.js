import React from 'react';
import { Container } from '@material-ui/core';
import GroupIcon from '@material-ui/icons/Group';

const Header = () => {

    return (
        <Container maxWidth="sm">
            <h1><GroupIcon/> Social Friends</h1>
        </Container>
    );
};

export default Header;