import { Link, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";

interface IChakraNavLink {

}

const ChakraNavLink: FC<IChakraNavLink> = ({ children }) => {

    const linkHover = {
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
    };

    return (
        <Link
            px={2}
            py={1}
            rounded={'md'}
            _hover={linkHover}
            href={'#'}
        >
            {children}
        </Link>
    );
}

export default ChakraNavLink