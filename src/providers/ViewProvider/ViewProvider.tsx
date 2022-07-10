import { Grid, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { selectIsAuthenticated } from "../../features/auth/authSlice";
import { useAppSelector } from "../../app/hooks";
import AppBreadcrumbs from "../../components/ AppBreadcrumbs/AppBreadcrumbs";
import AppSnackbar from "../../components/AppSnackbar/AppSnackbar";
import IBreadcrumb from "../../types/IBreadcrumb";
import useStyles from "./ViewProvider.styles";

interface ViewProviderProps {
    children: ReactNode
    breadcrumbs: IBreadcrumb[]
    heading: string
}

const ViewProvider: FC<ViewProviderProps> = ({ children, heading, breadcrumbs }: ViewProviderProps) => {
    const { classes } = useStyles();
    const location = useLocation();
    const isAuthed = useAppSelector(selectIsAuthenticated);

    return (
        <Box component={"main"} className={classes.container}>
            {/* padding on view that nudges content below navbar. */}
            <Toolbar />
            <Grid container spacing={2}>
                <Grid component={Grid} xs={12} item>
                    <Typography variant={"h1"}>
                        {heading}
                    </Typography>
                </Grid>
                {/* if we're not @ root, show breadcrumbs. */}
                {!(location.pathname === "/") && isAuthed &&
                    <Grid className={classes.breadcrumbPadding} item xs={12}>
                        <AppBreadcrumbs breadcrumbs={breadcrumbs} />
                    </Grid>
                }
                {/* content */}
                <Grid container item xs={12}>
                    {children}
                </Grid>
                {/* snackbar rendered in each view so testing becomes less painfull than rending the entire 
                app with the snackbar at the app level. */}
                <Grid item xs={12}>
                    <AppSnackbar />
                </Grid>
            </Grid>
        </Box>
    );
};

export default ViewProvider;
