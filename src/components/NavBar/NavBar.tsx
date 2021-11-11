import React, { FC } from 'react';
import NavLogo from './NavLogo/NavLogo';
import {
  Box,
  Flex,
  useColorModeValue
} from '@chakra-ui/react';
import { useBreakpointValue, useBreakpoint } from '@chakra-ui/react';
import UserControls from './UserControls/UserControls';
import NavLinks from './NavLinks/NavLinks';
import NavDrawer from './NavDrawer/NavDrawer';
import { useEffect } from 'hoist-non-react-statics/node_modules/@types/react';
import useWindowSize from '../../hooks/useWindowSize';
import { useAuth0 } from '@auth0/auth0-react';

interface INavBarProps { }

const NavBar: FC<INavBarProps> = () => {
  const windowSize = useWindowSize();
  
  const { isAuthenticated } = useAuth0();

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
      {isAuthenticated && windowSize.width < 990 && <NavDrawer />}
        <NavLogo />
        <Flex alignItems={'center'}>
          {isAuthenticated && windowSize.width > 990 && <NavLinks />}
          <UserControls />
        </Flex>
      </Flex>
    </Box>
  );
}

export default NavBar