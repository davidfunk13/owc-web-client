import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemButton, Toolbar, ListItemText, BoxProps } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import useStyles from "./DesktopDrawer.styles";
import navItems from "../../utils/navItems";
import { LogoutOutlined } from "@mui/icons-material";
import { useAuth0 } from "@auth0/auth0-react";
import NavigationItem from "../NavigationItem/NavigationItem";

interface DesktopDrawerProps { }

const DesktopDrawer: FC<DesktopDrawerProps & BoxProps> = () => {
    const { classes } = useStyles();
    const { logout } = useAuth0();

    const handleLogout = () => logout();

    return (
        <Drawer variant={"permanent"} className={classes.drawer}>
            <Toolbar />
            <Box className={classes.navListOverFlow}>
                <List>
                    {navItems.map(({ name, to, IconComponent }, index) =>
                        <NavigationItem
                            key={`nav-item-${index}-${name}`}
                            aria-label={`${name} Navgation Link`}
                            to={to}
                            name={name}
                            IconComponent={IconComponent}
                        />
                    )}
                </List>
                <Divider />
                <List>
                    <ListItem disablePadding>
                        <ListItemButton onClick={handleLogout}>
                            <ListItemIcon>
                                <LogoutOutlined />
                            </ListItemIcon>
                            <ListItemText primary={"Logout"} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    );
};

export default DesktopDrawer;