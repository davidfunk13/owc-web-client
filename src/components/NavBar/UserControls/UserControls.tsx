import DropdownAvatar from "../../DropdownAvatar/DropdownAvatar";
import React from "react";
import { useAuth0, } from "@auth0/auth0-react";
import { useColorMode, } from "@chakra-ui/color-mode";
import { Button, Stack, } from "@chakra-ui/react";
import { MoonIcon, SunIcon, } from "@chakra-ui/icons";

const UserControls = () => {
	const { isAuthenticated, loginWithRedirect, } = useAuth0();

	const { colorMode, toggleColorMode, } = useColorMode();

	return (
		<Stack direction={"row"} spacing={7}>
			<Button onClick={toggleColorMode}>
				{colorMode === "light" ? <MoonIcon /> : <SunIcon />}
			</Button>
			{isAuthenticated ? <DropdownAvatar /> : <Button onClick={() => loginWithRedirect()}>Login</Button>}
		</Stack>
	);
};

export default UserControls;
