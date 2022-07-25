import { Avatar, Box, Button, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Pagination } from "@mui/material";
import { FC, useState } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import { NavLink } from "react-router-dom";
import breadcrumbs from "./Profile.breadcrumbs";
import { useAuth0 } from "@auth0/auth0-react";
import { useDeleteBattletagMutation, useGetAllBattletagsQuery } from "../../app/services/battletagApi";
import AppLoading from "../../components/AppLoading/AppLoading";
import { Close } from "@mui/icons-material";

interface IProfile { }

const Profile: FC<IProfile> = () => {
    const { user } = useAuth0();

    const [page, setPage] = useState(1);

    const { data, isFetching, } = useGetAllBattletagsQuery({ userId: user?.sub, page });

    const [deleteBattletag, result] = useDeleteBattletagMutation();

    const handlePageChange = (page: number) => setPage(page);

    const handleDeleteBattletag = async (id: number) => {
        await deleteBattletag(id);
    };

    return (
        <ViewProvider heading={"Profile"} breadcrumbs={breadcrumbs}>
            <Grid container>
                <Grid item xs={12}>
                    <Button component={NavLink} to={"/profile/add-battletag"}>{"Add Battletag + "}</Button>
                </Grid>
                <Grid item xs={4}>
                    <Box aria-describedby={"progressbar"}>
                        <List dense={false}>

                            {data && data.data && data.data.data ? data.data.data.map(data =>
                                <ListItem key={data.id}>
                                    <ListItemAvatar>
                                        <Avatar src={`${process.env.REACT_APP_ICON_BUCKET + data.portrait}.png`} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={data.name}
                                        secondary={data.platform.toUpperCase()}
                                    />
                                    <ListItemText
                                        primary={"Is Public:"}
                                        secondary={data.isPublic.toString()}
                                    />
                                    <IconButton onClick={() => handleDeleteBattletag(data.id)}>
                                        <Close />
                                    </IconButton>
                                </ListItem>
                            ) :
                                isFetching ? <AppLoading /> : null}
                        </List>
                        {data?.data &&
                            <Pagination
                                page={page}
                                count={data.data.pages}
                                color={"primary"}
                                onChange={(_, page) => handlePageChange(page)}
                                onError={(e) => console.log(e)}
                                size={"large"}
                                showFirstButton
                                showLastButton
                            />
                        }
                    </Box>
                </Grid>
            </Grid>
        </ViewProvider>
    );
};

export default Profile;