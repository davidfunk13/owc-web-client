import { Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { openDrawer, selectDrawerOpen } from "../drawerSlice";

const navItems = ['Home', 'About', 'Contact'];

interface AppDrawerProps { }

const AppDrawer: FC<AppDrawerProps> = () => {
  const drawerOpen = useAppSelector(selectDrawerOpen);
  const drawerWidth = 240;
  const dispatch = useAppDispatch();
  const handleDrawerToggle = () => dispatch(openDrawer(!drawerOpen));

  return (
    <Drawer
      variant="temporary"
      open={drawerOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
      }}
    >

      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} >
        <Typography variant="h6" sx={{ my: 2 }}>
          MUI
        </Typography>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box >
    </Drawer>
  );
}

export default AppDrawer;