import { Button, IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Stack } from "@chakra-ui/layout";
import { Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay } from "@chakra-ui/modal";
import React from "react";
import NavLinks from "../NavLinks/NavLinks";

const NavDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <IconButton
                colorScheme="teal"
                aria-label="Open Menu"
                size="lg"
                icon={<HamburgerIcon />}
                onClick={onOpen}
            />
            <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth="1px">Navigation</DrawerHeader>
                    <DrawerBody>
                        <Stack>
                            <NavLinks />
                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}
export default NavDrawer;