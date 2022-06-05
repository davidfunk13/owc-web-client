import { ToolbarClasses } from "@mui/material";
import { CSSProperties } from "@mui/styled-engine";
import { makeStyles } from "../../../utils/makeStyles";
// Usage:

// const { classes, cx } = useStyles({ color });

// //Thanks to cx, className will take priority over classes.root
// return <span className={cx(classes.root, className)}>hello world</span>;


const useStyles = makeStyles()((theme) => ({
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // // necessary for content to be below app bar
        ...theme.mixins.toolbar as CSSProperties,
        justifyContent: "flex-end",
    }
}));

export default useStyles