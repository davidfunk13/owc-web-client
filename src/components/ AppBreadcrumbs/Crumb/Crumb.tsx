import { Typography } from "@mui/material";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import IBreadcrumb from "../../../types/IBreadcrumb";
import useStyles from "./Crumb.styles";

interface ICrumb {
    breadcrumb: IBreadcrumb
}

const Crumb: FC<ICrumb> = ({ breadcrumb }) => {
    const { name, linkPath, bold } = breadcrumb;

    const { classes } = useStyles({ isBold: bold! });

    const to = linkPath ?? "";

    return (
        <Typography
            className={classes.makeBold}
            aria-label={`${name}-breadcrumb-text`}
            component={NavLink}
            to={to}
        >
            {name}
        </Typography>);
};

export default Crumb;