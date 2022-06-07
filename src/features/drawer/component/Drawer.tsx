import { useTheme } from "@emotion/react";
import { ChevronLeft, ChevronRight, Inbox, Mail } from "@mui/icons-material";
import { Divider, Drawer as MuiDrawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
// import DrawerHeader from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { openDrawer, selectDrawerOpen } from "../drawerSlice";
import { theme } from "../../../theme";
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
      <>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
         <ChevronLeft /> 
        
        </IconButton>
      </>
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <Inbox /> : <Mail />}
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
                {index % 2 === 0 ? <Inbox /> : <Mail />}
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