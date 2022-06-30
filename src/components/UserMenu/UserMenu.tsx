import { Avatar, BoxProps, Grid, IconButton, ListItemText, Menu, MenuItem, PopoverOrigin, Tooltip } from "@mui/material";
import { FC, MouseEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectDark, setDark } from "../../app/features/theme/themeSlice";
import { Brightness5, Logout } from "@mui/icons-material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import useStyles from "./UserMenu.styles";
import { useAuth0, User } from "@auth0/auth0-react";
import Box from "@mui/material/Box";

interface UserMenuProps { user?: User }

const UserMenu: FC<UserMenuProps & Pick<BoxProps, "p" | "pr">> = ({ user, p, pr }) => {
    const { classes } = useStyles();
    const dispatch = useAppDispatch();
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const isDark = useAppSelector(selectDark);
    const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => setAnchorElUser(event.currentTarget);
    const handleCloseUserMenu = () => setAnchorElUser(null);
    const origin: PopoverOrigin = { vertical: "top", horizontal: "right" };
    const CurrentThemeIcon = isDark ? DarkModeIcon : Brightness5;
    const { logout } = useAuth0();
    const {
        picture,
        given_name
    } = user as User;

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
                    <Grid container spacing={1}>
                        <Grid item xs={"auto"}>
                            <CurrentThemeIcon />
                        </Grid>
                        <Grid item xs={"auto"}>
                            <ListItemText aria-label={"Toggle Theme"} primary={"Theme"} />
                        </Grid>
                    </Grid>
                </MenuItem>
                <MenuItem onClick={() => logout()}>
                    <Grid container spacing={1}>
                        <Grid item xs={"auto"}>
                            <Logout />
                        </Grid>
                        <Grid item xs={"auto"}>
                            <ListItemText aria-label={"Logout"} primary={"Logout"} />
                        </Grid>
                    </Grid>
                </MenuItem>
            </Menu>
        </Box>
    );
};

export default UserMenu;