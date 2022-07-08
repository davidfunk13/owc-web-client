import { FC, ReactElement } from "react";
import { Breadcrumbs, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Breadcrumb } from "../../types/IBreadcrumb";

interface IAppBreadcrumbs {
    breadcrumbs: Breadcrumb[];
}

const AppBreadcrumbs: FC<IAppBreadcrumbs> = ({ breadcrumbs }: IAppBreadcrumbs): ReactElement => {
    return (
        <Breadcrumbs aria-label={"breadcrumb"} data-testid={"app-breadcrumbs"}>
            <NavLink to={"/"} data-testid={"dashboard-breadcrumb-link"} >
                {"Home"}
            </NavLink>
            {breadcrumbs.map(breadcrumb =>
                <Typography key={`${breadcrumb.name}-breadcrumb`} component={NavLink} to={breadcrumb.linkPath ?? ""} data-testid={`${breadcrumb.name}-breadcrumb-text`}>
                    {breadcrumb.name}
                </Typography>
            )}
        </Breadcrumbs>
    );
};

export default AppBreadcrumbs;
