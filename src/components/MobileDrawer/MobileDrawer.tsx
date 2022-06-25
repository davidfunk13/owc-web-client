import { Divider, Drawer, List, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC, useEffect } from "react";
import { openDrawer, selectDrawerOpen } from "../../app/features/drawer/drawerSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import navItems from "../../utils/navItems";
import DrawerItem from "../NavigationItem/NavigationItem";
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
    }, []);

    return (
        <Box component={"nav"}>
            <Drawer
                variant={"temporary"}
                open={drawerOpen}
                onClose={handleDrawerToggle}
                ModalProps={modalProps}
            >
                <Box onClick={handleDrawerToggle} >
                    <Typography variant={"h5"} m={2}>
                        {"Overwatch Companion"}
                    </Typography>
                    <Divider />
                    <List>
                        {navItems.map(({ name, to, IconComponent }, index) =>
                            <DrawerItem
                                key={`nav-item-${index}-${name}`}
                                aria-label={`${name} Navgation Link`}
                                to={to}
                                name={name}
                                IconComponent={IconComponent}
                            />
                        )}
                    </List>
                </Box >
            </Drawer>
        </Box>
    );
};

export default MobileDrawer;