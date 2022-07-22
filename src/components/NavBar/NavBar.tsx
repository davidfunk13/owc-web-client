import { AppBar, Toolbar, useMediaQuery, Typography, Button, IconButton } from "@mui/material";
import { FC } from "react";
import UserMenu from "../UserMenu/UserMenu";
import useStyles from "./NavBar.styles";
import { theme } from "../../theme/theme";
import { useAuth0 } from "@auth0/auth0-react";
import { ReactComponent as Ow2Icon } from "../../assets/svg/Ow2Logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { openDrawer, selectDrawerOpen } from "../../features/drawer/drawerSlice";

interface INavBar { }

const NavBar: FC<INavBar> = () => {
    const dispatch = useAppDispatch();
    const { classes, cx } = useStyles();
    const desktopMenuBreakpoint = useMediaQuery(theme.breakpoints.up("md"));
    const hideLogoBreakpoint = useMediaQuery(theme.breakpoints.up("sm"));
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    const handleAuth = () => isAuthenticated ? logout({ returnTo: window.location.origin }) : loginWithRedirect();
    const buttonText = isAuthenticated ? "Logout" : "Log In";
    const drawerOpen = useAppSelector(selectDrawerOpen);
    const handleDrawerToggle = () => dispatch(openDrawer(!drawerOpen));
    const showHamburger = !desktopMenuBreakpoint && isAuthenticated;

    return (
        <AppBar className={cx({ [classes.appBar]: desktopMenuBreakpoint })} >
            <Toolbar>
                {/* only show if authed and we're not on "desktop" */}
                {showHamburger &&
                    <IconButton
                        edge={"start"}
                        color={"inherit"}
                        aria-label={"open drawer"}
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                }
                {/* we cant fit all this shit on mobile */}
                {hideLogoBreakpoint && <Ow2Icon aria-label={"Overwatch 2 Icon"} className={classes.icon} />}
                <Typography
                    aria-label={"app-title"}
                    variant={"h6"}
                    component={"div"}
                    className={classes.appTitle}
                >
                    {"Overwatch Companion"}
                </Typography>
                {isAuthenticated && <UserMenu user={user} pr={1} />}
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