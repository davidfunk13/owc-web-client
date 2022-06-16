import { makeStyles } from "../../../utils/makeStyles";

const useStyles = makeStyles({ name: "Navbar Styles" })((theme) => ({
    icon: {
        marginRight: 1,
        [theme.breakpoints.up("xs")]: {
            display: 'none',
        },
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    textHeading: {
        mr: 2,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
        [theme.breakpoints.up("xs")]: {
            display: 'none',
        },
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    hamburgerMenu: {
        flexGrow: 1,
        [theme.breakpoints.up("xs")]: {
            display: 'flex',
        },
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    }
}
));

export default useStyles