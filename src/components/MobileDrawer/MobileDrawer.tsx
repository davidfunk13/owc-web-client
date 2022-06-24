import { Divider, Drawer, List, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import { openDrawer, selectDrawerOpen } from "../../app/features/drawer/drawerSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import navItems from "../../navItems";
import DrawerItem from "../DrawerItem/DrawerItem";


interface MobileDrawerProps { }

const MobileDrawer: FC<MobileDrawerProps> = () => {
    const drawerOpen = useAppSelector(selectDrawerOpen);
    const drawerWidth = "50%";
    const dispatch = useAppDispatch();
    const handleDrawerToggle = () => dispatch(openDrawer(!drawerOpen));

    return (
        <Box component={"nav"}>
            <Drawer
                variant={"temporary"}
                open={drawerOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: "block", md: "none" },
                    "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
                }}
            >
                <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }} >
                    <Typography variant={"h6"} sx={{ my: 2 }}>
                        {"Overwatch Companion"}
                    </Typography>
                    <Divider />
                    <List>
                        {navItems.map((item) => {
                            const { name, to } = item;
                            return <DrawerItem key={name} name={name} to={to} />;
                        })}
                    </List>
                </Box >
            </Drawer>
        </Box>
    );
};

export default MobileDrawer;