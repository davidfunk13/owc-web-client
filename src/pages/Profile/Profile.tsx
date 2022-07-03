import { Button, Typography } from "@mui/material";
import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import { NavLink } from "react-router-dom";

interface IProfile { }

const Profile: FC<IProfile> = () => {
    return (
        <ViewProvider>
            <Typography variant={"h1"}>
                {"Profile"}
            </Typography>
            <Button component={NavLink} to={"/profile/add-battletag"}>{"Add Battletag + "}</Button>
        </ViewProvider>
    );
};

export default Profile;