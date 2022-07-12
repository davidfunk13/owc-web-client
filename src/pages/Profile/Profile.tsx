import { Button } from "@mui/material";
import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import { NavLink } from "react-router-dom";
import breadcrumbs from "./Profile.breadcrumbs";

interface IProfile { }

const Profile: FC<IProfile> = () => {
    return (
        <ViewProvider heading={"Profile"} breadcrumbs={breadcrumbs}>
            <Button component={NavLink} to={"/profile/add-battletag"}>{"Add Battletag + "}</Button>
        </ViewProvider>
    );
};

export default Profile;