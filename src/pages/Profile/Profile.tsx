import { Button, Typography } from "@mui/material";
import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import { NavLink } from "react-router-dom";
import { Breadcrumb } from "../../types/IBreadcrumb";

interface IProfile { }

const breadcrumbs: Breadcrumb[] = [
    {
        name: "Profile",
        bold: true
    },
];

const Profile: FC<IProfile> = () => {
    return (
        <ViewProvider heading={"Profile"} breadcrumbs={breadcrumbs}>
            <Button component={NavLink} to={"/profile/add-battletag"}>{"Add Battletag + "}</Button>
        </ViewProvider>
    );
};

export default Profile;