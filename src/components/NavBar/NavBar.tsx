import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { openDrawer, selectDrawerOpen } from "../../app/features/drawer/drawerSlice";
import UserMenu from "../UserMenu/UserMenu";
import useStyles from "./NavBar.styles";

const navItems = ["Home", "About", "Contact"];

interface NavBarProps {
    children?: JSX.Element | JSX.Element[]
}

const NavBar: FC<NavBarProps> = ({ children }) => {
    const dispatch = useAppDispatch();
    const drawerOpen = useAppSelector(selectDrawerOpen);
    const handleDrawerToggle = () => dispatch(openDrawer(!drawerOpen));
    const { classes } = useStyles();
    return (
        <Box>
            <AppBar component={"nav"}>
                <Toolbar>
                    <IconButton color={"inherit"} aria-label={"open drawer"} edge={"start"}
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <AdbIcon className={classes.icon} />
                    <Typography
                        variant={"h6"}
                        component={"div"}
                        sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                    >
                        {"MUI"}
                    </Typography>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: "#fff" }}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                    <UserMenu />
                </Toolbar>
            </AppBar>
            {children}
        </Box>
    );
};

export default NavBar;