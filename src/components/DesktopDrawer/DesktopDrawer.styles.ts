import { drawerWidth } from "../../theme/theme";
import { makeStyles } from "../../utils/makeStyles";


const useStyles = makeStyles({ name: "DesktopDrawer Styles" })((theme) => ({
    navListOverFlow: {
        overflow: "auto"
    },
    drawer:{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
    }
}));

export default useStyles;