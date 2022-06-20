import { AppBar, Avatar, Button, Icon, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import { Brightness5 } from '@mui/icons-material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { selectDark, setDark } from '../../theme/themeSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import AppDrawer from '../../drawer/component/AppDrawer';
import { openDrawer, selectDrawerOpen } from '../../drawer/drawerSlice';

const settings = ["Profile", "Account", "Dashboard", "Logout"];
const navItems = ['Home', 'About', 'Contact'];

interface NavBarProps { }

const NavBar: FC<NavBarProps> = () => {
    const dispatch = useAppDispatch()
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const isDark = useAppSelector(selectDark);
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElUser(event.currentTarget)
    const handleCloseUserMenu = () => setAnchorElUser(null)
    const drawerOpen = useAppSelector(selectDrawerOpen);
    const handleDrawerToggle = () => dispatch(openDrawer(!drawerOpen))

    return (
        <Box>
            <AppBar component="nav">
                <Toolbar>
                    <IconButton color="inherit" aria-label="open drawer" edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />

                    </IconButton>
                    <AdbIcon sx={{ display: { xs: 'flex', }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        MUI
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: '#fff' }}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClick={() => dispatch(setDark(!isDark))}>
                                <Typography textAlign="center">Theme: {isDark ?
                                    <Icon>
                                        <DarkModeIcon style={{ fontSize: "1rem" }} />
                                    </Icon>
                                    : <Icon>
                                        <Brightness5 style={{ fontSize: "1rem" }} />
                                    </Icon>}
                                </Typography>
                            </MenuItem>
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <AppDrawer />
            </Box>
        </Box>
    )
}
export default NavBar;