import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import { NavLink } from "react-router-dom";
import breadcrumbs from "./Profile.breadcrumbs";
import { useAuth0 } from "@auth0/auth0-react";
import { useGetAllBattletagsQuery } from "../../app/services/battletagApi";
import AppLoading from "../../components/AppLoading/AppLoading";

interface IProfile { }

const Profile: FC<IProfile> = () => {
    const { user } = useAuth0();
    const { data, isFetching, } = useGetAllBattletagsQuery(user?.sub);

    return (
        <ViewProvider heading={"Profile"} breadcrumbs={breadcrumbs}>
            <Button component={NavLink} to={"/profile/add-battletag"}>{"Add Battletag + "}</Button>
            <Box aria-describedby={"progressbar"}>
                {data && data.data ? data.data.map(data => <Typography>{data.name}</Typography>) : isFetching ? <AppLoading /> : null}
            </Box>
        </ViewProvider>
    );
};

export default Profile;