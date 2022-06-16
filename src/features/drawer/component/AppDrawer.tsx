import { ChevronLeft, ChevronRight, Inbox, Mail } from "@mui/icons-material";
import { Divider, Drawer as MuiDrawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
// import DrawerHeader from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { openDrawer, selectDrawerOpen } from "../drawerSlice";
import { theme } from "../../../theme/theme";
import useStyles from "./AppDrawer.styles";

const AppDrawer = () => {
  const dispatch = useAppDispatch();
  const drawerOpen = useAppSelector(selectDrawerOpen);
  const { classes, cx } = useStyles();

  const handleDrawerClose = () => {
    dispatch(openDrawer(false));
  };

  return (
    <MuiDrawer
      className={classes.drawerStyle}
      variant={"persistent"}
      anchor={"left"}
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
export default AppDrawer