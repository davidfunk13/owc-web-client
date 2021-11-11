import React, {FC} from "react";
import { Box, Heading } from "@chakra-ui/layout";

interface INavLogoProps{}

const NavLogo: FC<INavLogoProps> = () => {
    return (
        <Box>
            <Heading>NavLogo</Heading>
        </Box>
    )
};

export default NavLogo;