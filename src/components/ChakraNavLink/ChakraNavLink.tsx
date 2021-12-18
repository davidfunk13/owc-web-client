import { Link, } from "@chakra-ui/layout";
import { NavLink, } from "react-router-dom";
import { useColorModeValue, } from "@chakra-ui/color-mode";
import React, { FC, ReactNode, } from "react";

interface IChakraNavLinkProps {
    to: string
    children: ReactNode
}

const ChakraNavLink: FC<IChakraNavLinkProps> = ({ to, children, }: IChakraNavLinkProps) => {
	const hoverStyles = {
		textDecoration: "none",
		bg:             useColorModeValue("gray.200", "gray.700"),
	};

	return (
		<Link as={NavLink}
			px={8}
			py={1}
			rounded={"md"}
			_hover={hoverStyles}
			to={to}
			onClick={() => console.log("eat my butt")}
		>
			{children}
		</Link>
	);
};

export default ChakraNavLink;
