import ChakraNavLink from "../../ChakraNavLink/ChakraNavLink";
import React, { FC, } from "react";

interface INavLinksProps { }

const NavLinks: FC<INavLinksProps> = () => {
	return (
		<>
			<ChakraNavLink to={"/"}>Home</ChakraNavLink>
			<ChakraNavLink to={"/protected"}>Test Page</ChakraNavLink>
			<ChakraNavLink to={"/about"}>About</ChakraNavLink>
			<ChakraNavLink to={"/dashboard"}>Dashboard</ChakraNavLink>
		</>

	);
};

export default NavLinks;
