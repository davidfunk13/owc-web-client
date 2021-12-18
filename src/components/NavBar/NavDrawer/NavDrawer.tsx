import { HamburgerIcon, } from "@chakra-ui/icons";
import { IconButton, } from "@chakra-ui/button";
import NavLinks from "../NavLinks/NavLinks";
import { Stack, } from "@chakra-ui/layout";
import { Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, } from "@chakra-ui/modal";
import React, { useState, } from "react";

const NavDrawer = () => {
	const [ open, setOpen, ] = useState<boolean>(false);
	
	return (
		<>
			<IconButton
				colorScheme={"teal"}
				aria-label={"Open Menu"}
				size={"lg"}
				icon={<HamburgerIcon />}
				onClick={() => setOpen(!open)}
			/>
			<Drawer placement={"left"} onClose={() => setOpen(false)} isOpen={open}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerHeader borderBottomWidth={"1px"}>Navigation</DrawerHeader>
					<DrawerBody>
						<Stack>
							<NavLinks />
						</Stack>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default NavDrawer;
