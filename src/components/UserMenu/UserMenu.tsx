import { Avatar, BoxProps, Grid, IconButton, ListItemText, Menu, MenuItem, PopoverOrigin, Tooltip, Typography } from "@mui/material";
import { FC, MouseEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectDark, setDark } from "../../app/features/theme/themeSlice";
import { Brightness5 } from "@mui/icons-material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import useStyles from "./UserMenu.styles";
import { useAuth0, User } from "@auth0/auth0-react";
import Box from "@mui/material/Box";

interface UserMenuProps { }

const settings = ["Profile", "Dashboard", "Logout"];

const UserMenu: FC<UserMenuProps & BoxProps> = ({ p, pr }) => {
    const { classes } = useStyles();
    const dispatch = useAppDispatch();
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const isDark = useAppSelector(selectDark);
    const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => setAnchorElUser(event.currentTarget);
    const handleCloseUserMenu = () => setAnchorElUser(null);
    const { user } = useAuth0();
    const origin: PopoverOrigin = { vertical: "top", horizontal: "right" };
    const CurrentThemeIcon = isDark ? DarkModeIcon : Brightness5;
    const {
        picture,
        name,
        nickname,
        given_name,
        address,
        updated_at,
        sub,
        zoneinfo,
        website,
        email,
        email_verified,
        phone_number_verified,
        gender,
        family_name,
        birthdate,
        preferred_username,
        phone_number,
        profile
    } = user as User;

    console.log({ user });

    return (
        <Box p={p} pr={pr}>
            <Tooltip title={"Open settings"}>
                <IconButton onClick={handleOpenUserMenu}>
                    <Avatar alt={given_name} src={picture} />
                </IconButton>
            </Tooltip>
            <Menu
                id={"menu-appbar"}
                anchorEl={anchorElUser}
                className={classes.position}
                anchorOrigin={origin}
                transformOrigin={origin}
                keepMounted
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={() => dispatch(setDark(!isDark))}>
                    <CurrentThemeIcon/>
                    <ListItemText aria-label={"Toggle Theme"} primary={"Theme"} />                              
                </MenuItem>
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign={"center"}>{setting}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
};

export default UserMenu;