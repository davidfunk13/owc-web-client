import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import { Box, Collapse, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import INavigationItem from "../../types/INavigationItem";
// import useStyles from "./NavigationItem.styles";

interface NavigationItemProps {
    name: INavigationItem["name"],
    IconComponent?: INavigationItem["IconComponent"]
    to?: INavigationItem["to"]
}

const NavigationItem: FC<NavigationItemProps> = ({ name, IconComponent, to }) => {
    // const { classes } = useStyles();
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const link = () => to && navigate(to);

    function toggleOpen() {
        setOpen(!open);
    }

    return (
        <Box>
            <ListItem component={ListItemButton} onClick={link}> 
                <Grid container>
                    {IconComponent &&
                <ListItemIcon>
                    <IconComponent />
                </ListItemIcon>
                    }
                    <ListItemText primary={name} />
                    <IconButton onClick={toggleOpen}>
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>
                </Grid>      
            </ListItem>
            <Collapse in={open} timeout={"auto"} unmountOnExit>
                <List component={"div"} disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary={"Starred"} />
                    </ListItemButton>
                </List>
            </Collapse>
        </Box>

    );
};

export default NavigationItem;