import { ToolbarClasses } from "@mui/material";
import { CSSProperties } from "@mui/styled-engine";
import { makeStyles } from "../../../utils/makeStyles";

const useStyles = makeStyles({name:"AppDrawer Styles"})((theme) => ({
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar as CSSProperties,
        justifyContent: "flex-end",
    },
    drawerStyle: {
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
        },
    }
}));

export default useStyles