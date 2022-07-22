import { CircularProgress, Grid, Toolbar, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { FC, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import AppBreadcrumbs from "../../components/ AppBreadcrumbs/AppBreadcrumbs";
import AppSnackbar from "../../components/AppSnackbar/AppSnackbar";
import IBreadcrumb from "../../types/IBreadcrumb";
import useStyles from "./ViewProvider.styles";
import { useAuth0 } from "@auth0/auth0-react";
import { theme } from "../../theme/theme";
import clsx from "clsx";

interface ViewProviderProps {
    children: ReactNode
    breadcrumbs: IBreadcrumb[]
    heading: string
}

const ViewProvider: FC<ViewProviderProps> = ({ children, heading, breadcrumbs }: ViewProviderProps) => {
    const location = useLocation();
    const desktopBreakpoint = useMediaQuery(theme.breakpoints.up("md"));
    const { classes } = useStyles();
    const { isAuthenticated, isLoading } = useAuth0();

    return (
        <Box component={"main"} className={clsx(desktopBreakpoint && isAuthenticated ? classes.desktopContainer : classes.mobileContainer)}>
            {/* padding on view that nudges content below navbar. */}
            <Toolbar />
            {!isLoading ?
                <Grid container spacing={2}>
                    <Grid component={Grid} xs={12} item>
                        <Typography variant={"h1"}>
                            {heading}
                        </Typography>
                    </Grid>

                    {/* if we're not @ root, show breadcrumbs. */}
                    {!(location.pathname === "/") && isAuthenticated &&
                    <Grid className={classes.breadcrumbPadding} item xs={12}>
                        <AppBreadcrumbs breadcrumbs={breadcrumbs} />
                    </Grid>
                    }

                    {/* content */}
                    <Grid container item xs={12}>
                        {children}
                    </Grid>
                </Grid>
                :
                <Grid container height={"100vh"} alignItems={"center"} justifyContent={"center"}>
                    <CircularProgress aria-label={"Application is loading"} size={100} />
                </Grid>
            }
            {/* snackbar rendered in each view so testing becomes less painfull than rending the entire 
                app with the snackbar at the app level. */}
            <AppSnackbar />
        </Box>
    );
};

export default ViewProvider;
