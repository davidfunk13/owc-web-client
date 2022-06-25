import { Box, BoxProps, IconButton } from "@mui/material";
import { FC } from "react";
import { openDrawer, selectDrawerOpen } from "../../../app/features/drawer/drawerSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import MenuIcon from "@mui/icons-material/Menu";
// import useStyles from "./HamburgerMenuButton.styles";


interface HamburgerMenuButtonProps {
    
 }

const HamburgerMenuButton: FC<HamburgerMenuButtonProps & BoxProps> = ({p}) => {
    // const { classes } = useStyles();
    const dispatch = useAppDispatch();
    const drawerOpen = useAppSelector(selectDrawerOpen);
    const handleDrawerToggle = () => dispatch(openDrawer(!drawerOpen));

    return (
        <Box p={p}>
            <IconButton
                edge={"start"}
                color={"inherit"}
                aria-label={"open drawer"}
                onClick={handleDrawerToggle}
            >
                <MenuIcon />
            </IconButton>
        </Box>
    );
};

export default HamburgerMenuButton;