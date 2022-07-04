import { Grid, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import AppBreadcrumbs from "../../components/ AppBreadcrumbs/AppBreadcrumbs";
import AppSnackbar from "../../components/AppSnackbar/AppSnackbar";
import { Breadcrumb } from "../../types/IBreadcrumb";
import useStyles from "./ViewProvider.styles";

interface ViewProviderProps {
    children: ReactNode
    breadcrumbs: Breadcrumb[]
    heading: string
}

const ViewProvider: FC<ViewProviderProps> = ({ children, heading, breadcrumbs }: ViewProviderProps) => {
    const { classes } = useStyles();
    const location = useLocation();

    return (
        <Box component={"main"} className={classes.container}>
            <Toolbar />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant={"h1"}>
                        {heading}
                    </Typography>
                </Grid>
                {
                    !(location.pathname === "/") &&
                    <Grid item xs={12}>
                        <AppBreadcrumbs breadcrumbs={breadcrumbs} />
                    </Grid>
                }
                <Grid container item xs={12}>
                    {children}
                </Grid>
                <Grid item xs={12}>
                    <AppSnackbar />
                </Grid>
            </Grid>
        </Box>
    );
};

export default ViewProvider;
