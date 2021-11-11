import React from 'react';
import { Stack, Button } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { useColorMode } from "@chakra-ui/color-mode";
import { useAuth0 } from "@auth0/auth0-react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import DropdownAvatar from '../../DropdownAvatar/DropdownAvatar';


const UserControls = () => {
    const { isAuthenticated, loginWithRedirect } = useAuth0();
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Stack direction={'row'} spacing={7}>
            <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            {isAuthenticated ? <DropdownAvatar /> : <Button onClick={() => loginWithRedirect()}>Login</Button>}
        </Stack>
    )
}
export default UserControls;
