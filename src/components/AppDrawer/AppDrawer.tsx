import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Input, useDisclosure } from "@chakra-ui/react";
import { RefObject, useRef } from "react";

const AppDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const btnRef = useRef() as RefObject<HTMLButtonElement>

    return (
        <>
            <Button ref={btnRef} colorScheme={'teal'} onClick={onOpen}>
                Open
            </Button>
            <Drawer isOpen={isOpen} placement={'right'} onClose={onClose} finalFocusRef={btnRef}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create your account</DrawerHeader>
                    <DrawerBody>
                        <Input placeholder={'Type here...'} />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default AppDrawer;