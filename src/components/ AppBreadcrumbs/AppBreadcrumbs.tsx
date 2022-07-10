import { FC, ReactElement } from "react";
import { Breadcrumbs } from "@mui/material";
import { NavLink } from "react-router-dom";
import IBreadcrumb from "../../types/IBreadcrumb";
import Crumb from "./Crumb/Crumb";

interface IAppBreadcrumbs {
    breadcrumbs: IBreadcrumb[];
}

const AppBreadcrumbs: FC<IAppBreadcrumbs> = ({ breadcrumbs }: IAppBreadcrumbs): ReactElement => {
    return (
        <Breadcrumbs aria-label={"breadcrumbs"}>
            <NavLink to={"/"} aria-label={"home-breadcrumb-link"}>
                {"Home"}
            </NavLink>
            {breadcrumbs.map((crumb, i) =>
                <Crumb key={`${i}-${crumb.name}`} breadcrumb={crumb} />
            )}
        </Breadcrumbs>
    );
};

export default AppBreadcrumbs;
