import { FC, ReactElement } from "react";
import { Breadcrumbs, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Breadcrumb } from "../../types/IBreadcrumb";

interface IAppBreadcrumbs {
    breadcrumbs: Breadcrumb[];
}

interface ICrumb {
    breadcrumb: Breadcrumb;
}

const CrumbWithPath: FC<ICrumb> = ({ breadcrumb }) => {
    return (
        <NavLink
            to={breadcrumb.linkPath!}
            data-testid={`${breadcrumb.name}-breadcrumb-link`}
        >
            {breadcrumb.name}
        </NavLink>
    );
};

const CrumbWithoutPath: FC<ICrumb> = ({ breadcrumb }) => {
    return (
        <Typography data-testid={`${breadcrumb.name}-breadcrumb-text`}>
            {breadcrumb.name}
        </Typography>
    );
};

const AppBreadcrumbs: FC<IAppBreadcrumbs> = ({ breadcrumbs }: IAppBreadcrumbs): ReactElement => {
    return (
        <Breadcrumbs aria-label={"breadcrumb"} data-testid={"app-breadcrumbs"}>
            <NavLink to={"/"} data-testid={"dashboard-breadcrumb-link"} >
                {"Home"}
            </NavLink>
            {breadcrumbs.map(breadcrumb => breadcrumb.linkPath ? <CrumbWithPath key={breadcrumb.name} breadcrumb={breadcrumb} /> : <CrumbWithoutPath key={breadcrumb.name} breadcrumb={breadcrumb} />)}
        </Breadcrumbs>
    );
};

export default AppBreadcrumbs;
