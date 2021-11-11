import React, { FC } from 'react';
import history from '../../../utils/history';
import ChakraNavLink from '../../ChakraNavLink/ChakraNavLink';

interface INavLinksProps { }

export function navigateAndClose(route: string) {
    history.push(route)
//setClosedOrwhatEverInRedux
}

const NavLinks: FC<INavLinksProps> = () => {
    return (
        <>
            <ChakraNavLink to={"/"}>Home</ChakraNavLink>
            <ChakraNavLink to={"/protected"}>Test Page</ChakraNavLink>
            <ChakraNavLink to={"/about"}>About</ChakraNavLink>
            <ChakraNavLink to={"/dashboard"}>Dashboard</ChakraNavLink>
        </>

    );
}

export default NavLinks