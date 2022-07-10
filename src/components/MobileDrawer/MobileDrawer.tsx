import { Divider, Drawer, List, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC, useEffect } from "react";
import { openDrawer, selectDrawerOpen } from "../../features/drawer/drawerSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import generateNavItems from "../../utils/generateNavItems";
// import useStyles from "./MobileDrawer.styles";

interface IMobileDrawer { }

const MobileDrawer: FC<IMobileDrawer> = () => {
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
                    {generateNavItems()}
                </List>
            </Drawer>
        </Box>
    );
};

export default MobileDrawer;