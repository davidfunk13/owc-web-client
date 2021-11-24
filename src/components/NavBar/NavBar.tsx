import NavDrawer from "./NavDrawer/NavDrawer";
import NavLinks from "./NavLinks/NavLinks";
import NavLogo from "./NavLogo/NavLogo";
import UserControls from "./UserControls/UserControls";
import { useAuth0, } from "@auth0/auth0-react";
import useWindowSize from "../../hooks/useWindowSize";
import {
	Box,
	Flex,
	useColorModeValue,
} from "@chakra-ui/react";
import React, { FC, } from "react";

interface INavBarProps { }

const NavBar: FC<INavBarProps> = () => {
	const windowSize = useWindowSize();

	const { isAuthenticated, } = useAuth0();

	return (
		<Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
			<Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
				{isAuthenticated && windowSize.width < 990 && <NavDrawer />}
				<NavLogo />
				<Flex alignItems={"center"}>
					{isAuthenticated && windowSize.width > 990 && <NavLinks />}
					<UserControls />
				</Flex>
			</Flex>
		</Box>
	);
};

export default NavBar;
