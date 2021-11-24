import { HamburgerIcon, } from "@chakra-ui/icons";
import { IconButton, } from "@chakra-ui/button";
import NavLinks from "../NavLinks/NavLinks";
import React from "react";
import { Stack, } from "@chakra-ui/layout";
import { Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, } from "@chakra-ui/modal";
import { selectDrawerOpen, setOpen, } from "../../../redux/reducers/drawer/drawerSlice";
import { useAppDispatch, useAppSelector, } from "../../../redux/store";

const NavDrawer = () => {

	const dispatch = useAppDispatch();

	const open = useAppSelector(selectDrawerOpen);

	return (
		<>
			<IconButton
				colorScheme={"teal"}
				aria-label={"Open Menu"}
				size={"lg"}
				icon={<HamburgerIcon />}
				onClick={() => dispatch(setOpen(!open))}
			/>
			<Drawer placement={"left"} onClose={() => dispatch(setOpen(false))} isOpen={open}>
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
