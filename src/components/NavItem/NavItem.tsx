import { Button } from "@mui/material";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import useStyles from "./NavItem.styles";

interface NavItemProps {
    name: string
    to: string
}

//consider finding a way to generate nav items from props or iterators.

const NavItem: FC<NavItemProps> = ({ name, to }) => {
    const { classes } = useStyles();

    return (
        <Button component={NavLink} to={to} className={classes.navItemButton}>
            {name}
        </Button>

    );
};

export default NavItem;