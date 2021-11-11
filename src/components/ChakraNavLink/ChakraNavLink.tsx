import { useColorModeValue } from "@chakra-ui/color-mode";
import { Link } from "@chakra-ui/layout";
import React, { ReactNode, FC } from "react";
import { NavLink } from 'react-router-dom';

interface IChakraNavLinkProps {
    to: string
    children: ReactNode
}

const ChakraNavLink: FC<IChakraNavLinkProps> = ({ to, children }: IChakraNavLinkProps) => {
    const hoverStyles = {
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
    }

    return (
        <Link as={NavLink}
            px={8}
            py={1}
            rounded={'md'}
            _hover={hoverStyles}
            to={to}
        >
            {children}
        </Link>
    )
}


export default ChakraNavLink;