import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemButton, Toolbar, ListItemText, BoxProps } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import useStyles from "./DesktopMenu.styles";
import { LogoutOutlined } from "@mui/icons-material";
import { useAuth0 } from "@auth0/auth0-react";
import generateNavItems from "../../../utils/generateNavItems";

interface IDesktopMenu { }

const DesktopMenu: FC<IDesktopMenu & BoxProps> = () => {
    const { classes } = useStyles();
    const { logout } = useAuth0();

    const handleLogout = () => logout();

    return (
        <Drawer variant={"permanent"} className={classes.drawer}>
            <Toolbar />
            <Box className={classes.navListOverFlow}>
                <List>
                    {generateNavItems()}
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

export default DesktopMenu;