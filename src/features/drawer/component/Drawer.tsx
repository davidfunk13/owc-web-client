import { useTheme } from "@emotion/react";
import { Drawer as MuiDrawer } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { openDrawer, selectDrawerOpen } from "./drawerSlice";

const drawerStyle = {
    width: 240,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: 240,
      boxSizing: 'border-box',
    },
  }

const Drawer = () => {
    const dispatch = useAppDispatch();
    const drawerOpen = useAppSelector(selectDrawerOpen);
    const theme = useTheme();

    const handleDrawerClose = () => {
        dispatch(openDrawer(false));
    };

    return (
        <MuiDrawer
        sx={drawerStyle}
        variant="persistent"
        anchor="left"
        open={drawerOpen}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
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
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
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
      </MuiDrawer>
    );

}
export default Drawer