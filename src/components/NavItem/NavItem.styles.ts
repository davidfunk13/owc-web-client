import { makeStyles } from "../../utils/makeStyles";

const useStyles = makeStyles({ name: "NavItem Styles" })((theme) => ({
    navItemButton: {
        color: theme.palette.common.white
    }
}
));

export default useStyles;