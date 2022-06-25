import { AppBar, Toolbar, useMediaQuery, Typography, Button } from "@mui/material";
import { FC } from "react";
import UserMenu from "../UserMenu/UserMenu";
import useStyles from "./NavBar.styles";
import { theme } from "../../theme/theme";
import HamburgerMenuButton from "./HamburgerMenuButton/HamburgerMenuButton";
import { useAuth0 } from "@auth0/auth0-react";
import { ReactComponent as Ow2Icon } from "../../assets/svg/Ow2Logo.svg";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
    const { classes, cx } = useStyles();
    const desktopDrawerBreakpoint = useMediaQuery(theme.breakpoints.up("md"));
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    const handleAuth = () => isAuthenticated ? logout({ returnTo: window.location.origin }): loginWithRedirect();
    const buttonText = isAuthenticated ? "Logout" : "Log In"; 

    return (
        <AppBar className={cx({ [classes.appBar]: desktopDrawerBreakpoint })} >
            <Toolbar>
                {!desktopDrawerBreakpoint && isAuthenticated && <HamburgerMenuButton />}
                <Ow2Icon aria-label={"Overwatch 2 Icon"} className={classes.icon} />
                <Typography
                    aria-label={"app-title"}
                    variant={"h6"}
                    component={"div"}
                    className={classes.appTitle}
                >
                    {"Overwatch Companion"}
                </Typography>
                {isAuthenticated && <UserMenu pr={2} />}
                <Button 
                    aria-label={"Login Button"}
                    color={"inherit"} 
                    variant={"outlined"}
                    title={buttonText}
                    onClick={handleAuth}
                >
                    {buttonText}
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;