import { Flex } from '@chakra-ui/react';
import React from 'react'
import ChakraNavLink from '../ChakraNavLink/ChakraNavLink';

const NavbarItems = () => {
    return (
        <Flex flexGrow={1} justifyContent={'left'}>
            <ChakraNavLink>Test</ChakraNavLink>
        </Flex>
    );
}

export default NavbarItems;
