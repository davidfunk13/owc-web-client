import { Avatar, } from "@chakra-ui/avatar";
import { Button, } from "@chakra-ui/button";
import { Center, } from "@chakra-ui/layout";
import { useAuth0, } from "@auth0/auth0-react";
import { Menu, MenuButton, MenuDivider, MenuItem, MenuList, } from "@chakra-ui/menu";
import React, { FC, } from "react";

interface IDropdownAvatarProps { }

const DropdownAvatar: FC<IDropdownAvatarProps> = () => {

	const { logout, } = useAuth0();

	const logoutWithRedirect = () => logout({ returnTo: window.location.origin, });

	return (
		<Menu>
			<MenuButton
				as={Button}
				rounded={"full"}
				variant={"link"}
				cursor={"pointer"}
				minW={0}>
				<Avatar
					size={"sm"}
					src={"https://avatars.dicebear.com/api/male/username.svg"}
				/>
			</MenuButton>
			<MenuList alignItems={"center"}>
				<br />
				<Center>
					<Avatar
						size={"2xl"}
						src={"https://avatars.dicebear.com/api/male/username.svg"}
					/>
				</Center>
				<br />
				<Center>
					<p>Username</p>
				</Center>
				<br />
				<MenuDivider />
				<MenuItem>Your Servers</MenuItem>
				<MenuItem>Account Settings</MenuItem>
				<MenuItem onClick={() => logoutWithRedirect()}>Logout</MenuItem>
			</MenuList>
		</Menu>
	);
};

export default DropdownAvatar;
