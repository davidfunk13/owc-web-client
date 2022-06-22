import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import useStyles from "./DrawerItem.styles";

interface DrawerItemProps {
    name: string
    to: string
}

const DrawerItem: FC<DrawerItemProps> = ({ name, to }) => {
    const { classes } = useStyles();

    const navigate = useNavigate();

    const link = () => navigate(to);

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={link} className={classes.drawerItem}>
                <ListItemText primary={name} />
            </ListItemButton>
        </ListItem>

    );
};

export default DrawerItem;