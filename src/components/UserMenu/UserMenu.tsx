import { Avatar, Box, BoxProps, Icon, IconButton, Menu, MenuItem, PopoverOrigin, Tooltip, Typography } from "@mui/material";
import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectDark, setDark } from "../../app/features/theme/themeSlice";
import { Brightness5 } from "@mui/icons-material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import useStyles from "./UserMenu.styles";

interface UserMenuProps { }

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const UserMenu: FC<UserMenuProps & BoxProps> = ({ p, pr }) => {
    const { classes } = useStyles();
    const dispatch = useAppDispatch();
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const isDark = useAppSelector(selectDark);
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElUser(event.currentTarget);
    const handleCloseUserMenu = () => setAnchorElUser(null);
    const origin: PopoverOrigin = { vertical: "top", horizontal: "right" };

    return (
        <Box p={p} pr={pr}>
            <Tooltip title={"Open settings"}>
                <IconButton onClick={handleOpenUserMenu}>
                    <Avatar alt={"Name of User"} src={"/static/images/avatar/2.jpg"} />
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
                    <Typography textAlign={"center"}>{"Theme: "}{isDark ?
                        <Icon>
                            <DarkModeIcon />
                        </Icon>
                        : <Icon>
                            <Brightness5 />
                        </Icon>}
                    </Typography>
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