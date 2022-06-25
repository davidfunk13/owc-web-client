import { makeStyles } from "../../utils/makeStyles";

const useStyles = makeStyles({ name: "Navbar Styles" })((theme) => ({
    appBar: {
        position: "fixed",
        zIndex: theme.zIndex.drawer + 1
    },
    icon: {
        marginRight: 10,
        height: 50,
        minWidth: 100,
        [theme.breakpoints.up("xs")]: {
            padding: theme.spacing(1),
        },
    },
    appTitle: {
        flexGrow: 1,
    },
    navItemBox: {
        [theme.breakpoints.up("xs")]: {
            display: "none",
        },
        [theme.breakpoints.up("md")]: {
            display: "block",
        },
    },
}
));

export default useStyles;