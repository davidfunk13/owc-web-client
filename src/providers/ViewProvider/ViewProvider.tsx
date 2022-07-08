import { Grid, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { selectIsAuthenticated } from "../../app/features/auth/authSlice";
import { useAppSelector } from "../../app/hooks";
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
    const isAuthed = useAppSelector(selectIsAuthenticated);

    return (
        <Box component={"main"} className={classes.container}>
            {/* padding on view that nudges content below navbar. */}
            <Toolbar />
            <Grid container spacing={2}>
                <Typography component={Grid} xs={12} item variant={"h1"}>
                    {heading}
                </Typography>
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
