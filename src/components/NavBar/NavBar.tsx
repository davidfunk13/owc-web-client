import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { ReactComponent as Ow2Icon } from "../../assets/svg/Ow2Logo.svg";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { openDrawer, selectDrawerOpen } from "../../app/features/drawer/drawerSlice";
import UserMenu from "../UserMenu/UserMenu";
import useStyles from "./NavBar.styles";
import AppDrawer from "../AppDrawer/AppDrawer";
import NavItem from "../NavItem/NavItem";
import navItems from "../../navItems";

interface NavBarProps { }

const NavBar: FC<NavBarProps> = () => {
    const dispatch = useAppDispatch();
    const drawerOpen = useAppSelector(selectDrawerOpen);
    const handleDrawerToggle = () => dispatch(openDrawer(!drawerOpen));
    const { classes } = useStyles();

    return (
        <Box p={1}>
            <AppBar component={"nav"}>
                <Toolbar>
                    <IconButton
                        edge={"start"}
                        color={"inherit"}
                        aria-label={"open drawer"}
                        onClick={handleDrawerToggle}
                        className={classes.hamburgerIcon}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Ow2Icon className={classes.icon} />
                    <Typography
                        aria-label={"app-title"}
                        variant={"h6"}
                        component={"div"}
                        className={classes.appTitle}
                    >
                        {"Overwatch Companion"}
                    </Typography>
                    <Box className={classes.navItemBox}>
                        {navItems.map(item=>{
                            const {name, to} = item;
                            return <NavItem key={name} name={name} to={to}/>;                            
                        })}
                    </Box>
                    <UserMenu />
                    {/* <Button variant={"text"} title={"Login"}/> */}
                </Toolbar>
            </AppBar>
            <AppDrawer />
        </Box>
    );
};

export default NavBar;