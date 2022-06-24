import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemButton, Toolbar, Typography, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import { openDrawer, selectDrawerOpen } from "../../app/features/drawer/drawerSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import navItems from "../../navItems";
import DrawerItem from "../DrawerItem/DrawerItem";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";


interface DesktopDrawerProps { }

const drawerWidth = 240;

const DesktopDrawer: FC<DesktopDrawerProps> = () => {
    const drawerOpen = useAppSelector(selectDrawerOpen);
    const dispatch = useAppDispatch();
    const handleDrawerToggle = () => dispatch(openDrawer(!drawerOpen));

    return (
        <Drawer
            variant={"permanent"}
            open={false}
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: "auto" }}>
                <List>
                    {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {["All mail", "Trash", "Spam"].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};

export default DesktopDrawer;