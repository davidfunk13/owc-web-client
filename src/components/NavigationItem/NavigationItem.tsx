import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import { Box, Collapse, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { FC, SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { openDrawer, selectDrawerOpen } from "../../app/features/drawer/drawerSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import INavigationItem from "../../types/INavigationItem";

interface NavigationItemProps {
    name: INavigationItem["name"],
    IconComponent?: INavigationItem["IconComponent"]
    to?: INavigationItem["to"]
    subItems: INavigationItem["subItems"]
}


const NavigationItem: FC<NavigationItemProps> = ({ name, IconComponent, to, subItems }) => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    
    const link = () => {
        to && navigate(to);
        dispatch(openDrawer(false));
    };

    function toggleOpen(e: SyntheticEvent) {
        e.preventDefault();
        e.stopPropagation();
        setOpen(!open);
    }

    return (
        <Box>
            <ListItem component={ListItemButton} onClick={link}> 
                {IconComponent && <ListItemIcon><IconComponent /> </ListItemIcon>}
                <ListItemText primary={name} />
                {subItems.length > 0 && 
                    <IconButton onClick={toggleOpen}>
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>
                }
            </ListItem>
            {subItems.length > 0 &&
             <Collapse in={open} timeout={"auto"} unmountOnExit>
                 <List component={"div"} disablePadding>
                     {subItems.map(({name, to}) => {
                         const link = () => { 
                             setOpen(false);
                             dispatch(openDrawer(false));
                             to && navigate(to);
                         };

                         return (
                             <ListItemButton key={`${name}-sub-item`} component={ListItemButton} onClick={link} sx={{ pl: 4 }}>
                                 <ListItemIcon>
                                     <StarBorder />
                                 </ListItemIcon>
                                 <ListItemText primary={name} />
                             </ListItemButton>
                         );
                     })}
                 </List>
             </Collapse>}
        </Box>

    );
};

export default NavigationItem;