import {
  Box, Flex, Stack, useColorModeValue
} from '@chakra-ui/react';
import { FC } from 'react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import AppDrawer from '../AppDrawer/AppDrawer';
import AvatarDropdown from './AvatarDropdown/AvatarDropdown';

interface NavbarProps {

}

const Navbar: FC<NavbarProps> = () => {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent="space-between">
        <Stack direction={"row"} spacing={10} alignItems={"center"} justifyContent={'space-between'}>
          <AppDrawer />
          <Box>Overwatch SR Tracker</Box>
        </Stack>
        <Flex alignItems={'center'}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <AvatarDropdown />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;