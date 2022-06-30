import { AppBar, Toolbar, useMediaQuery, Typography, Button, Box, IconButton } from "@mui/material";
import { FC } from "react";
import UserMenu from "../UserMenu/UserMenu";
import useStyles from "./NavBar.styles";
import { theme } from "../../theme/theme";
import { useAuth0 } from "@auth0/auth0-react";
import { ReactComponent as Ow2Icon } from "../../assets/svg/Ow2Logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { openDrawer, selectDrawerOpen } from "../../app/features/drawer/drawerSlice";
import { selectIsAuthenticated, selectUser } from "../../app/features/auth/authSlice";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
    const dispatch = useAppDispatch();
    const { classes, cx } = useStyles();
    const desktopDrawerBreakpoint = useMediaQuery(theme.breakpoints.up("md"));
    const { loginWithRedirect, logout } = useAuth0();
    const isAuthed = useAppSelector(selectIsAuthenticated);
    const user = useAppSelector(selectUser);
    const handleAuth = () => isAuthed ? logout({ returnTo: window.location.origin }): loginWithRedirect();
    const buttonText = isAuthed ? "Logout" : "Log In"; 
    const drawerOpen = useAppSelector(selectDrawerOpen);
    const handleDrawerToggle = () => dispatch(openDrawer(!drawerOpen));

    return (
        <AppBar className={cx({ [classes.appBar]: desktopDrawerBreakpoint })} >
            <Toolbar>
                {!desktopDrawerBreakpoint && isAuthed && 
                <Box >
                    <IconButton
                        edge={"start"}
                        color={"inherit"}
                        aria-label={"open drawer"}
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>}
                <Ow2Icon aria-label={"Overwatch 2 Icon"} className={classes.icon} />
                <Typography
                    aria-label={"app-title"}
                    variant={"h6"}
                    component={"div"}
                    className={classes.appTitle}
                >
                    {"Overwatch Companion"}
                </Typography>
                {isAuthed && <UserMenu user={user} pr={2} />}
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