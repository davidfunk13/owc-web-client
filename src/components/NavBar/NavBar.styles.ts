import { makeStyles } from "../../utils/makeStyles";

const useStyles = makeStyles({ name: "Navbar Styles" })((theme) => ({
    icon: {
        marginRight: 10,
        maxHeight: 50,
        [theme.breakpoints.up("xs")]: {
            padding: theme.spacing(1),
        },
    },
    hamburgerIcon: {
        marginRight: 2,
        [theme.breakpoints.up("sm")]: {
            display: "none",
        }
    },
    appTitle: {
        flexGrow: 1,
    },
    navItemBox: {
        [theme.breakpoints.up("xs")]: {
            display: "none",
        },
        [theme.breakpoints.up("sm")]: {
            display: "block",
        }
    },
    navItemButton: {
        color: theme.palette.common.white
    }
}
));

export default useStyles;