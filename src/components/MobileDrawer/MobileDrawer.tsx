import { StarBorder } from "@mui/icons-material";
import { Collapse, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { openDrawer, selectDrawerOpen } from "../../app/features/drawer/drawerSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import navItems from "../../utils/navItems";
import NavigationItem from "../NavigationItem/NavigationItem";
// import useStyles from "./MobileDrawer.styles";


interface MobileDrawerProps { }

const MobileDrawer: FC<MobileDrawerProps> = () => {
    const drawerOpen = useAppSelector(selectDrawerOpen);
    const dispatch = useAppDispatch();
    const handleDrawerToggle = () => dispatch(openDrawer(!drawerOpen));
    const modalProps = { keepMounted: true }; // Better open performance on mobile.
    // const { classes } = useStyles();

    useEffect(() => {
        return () => {
            dispatch(openDrawer(false));
        };
    }, [dispatch]);

    return (
        <Box component={"nav"}>
            <Drawer
                variant={"temporary"}
                open={drawerOpen}
                onClose={handleDrawerToggle}
                ModalProps={modalProps}
            >
                <Typography variant={"h5"} m={2}>
                    {"Overwatch Companion"}
                </Typography>
                <Divider />
                <List>
                    {navItems.map(({ name, to, IconComponent, subItems }, index) =>
                        <Box>

                            <NavigationItem
                                key={`nav-item-${index}-${name}`}
                                aria-label={`${name} Navgation Link`}
                                to={to}
                                name={name}
                                IconComponent={IconComponent}
                                subItems={subItems}
                            />
                        </Box>

                        //sub items here.
                    )}
                </List>
            </Drawer>
        </Box>
    );
};

export default MobileDrawer;