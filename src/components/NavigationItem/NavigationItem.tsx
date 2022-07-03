import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { FC } from "react";
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

    const navigate = useNavigate();

    const link = () => to && navigate(to);

    return (
        <ListItem component={ListItemButton} onClick={link}> 
            <Grid container>
                {IconComponent &&
                <ListItemIcon>
                    <IconComponent />
                </ListItemIcon>
                }
                <ListItemText primary={name} />
            </Grid>      
        </ListItem>


    );
};

export default NavigationItem;