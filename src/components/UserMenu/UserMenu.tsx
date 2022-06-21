import { Avatar, Icon, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectDark, setDark } from "../../app/features/theme/themeSlice";
import { Brightness5 } from "@mui/icons-material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import useStyles from "./UserMenu.styles";

interface NavBarItemsProps { }

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const UserMenu: FC<NavBarItemsProps> = () => {
    const { classes } = useStyles();
    const dispatch = useAppDispatch();
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const isDark = useAppSelector(selectDark);
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElUser(event.currentTarget);
    const handleCloseUserMenu = () => setAnchorElUser(null);

    return (
        <Box>
            <Tooltip title={"Open settings"}>
                <IconButton onClick={handleOpenUserMenu}>
                    <Avatar alt={"Name of User"} src={"/static/images/avatar/2.jpg"} />
                </IconButton>
            </Tooltip>
            <Menu
                id={"menu-appbar"}
                anchorEl={anchorElUser}
                className={classes.position}
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