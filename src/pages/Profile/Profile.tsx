import { Button, Grid, Pagination } from "@mui/material";
import { FC, useState } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import { NavLink } from "react-router-dom";
import breadcrumbs from "./Profile.breadcrumbs";
import { useAuth0 } from "@auth0/auth0-react";
import { useDeleteBattletagMutation, useGetAllBattletagsQuery } from "../../services/battletagApi";
import BattletagList from "../../components/BattletagList/BattletagList";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectedBattletag, setSelected } from "../../features/selectedBattletag/selectedBattletagSlice";
import IBattletag from "../../types/IBattletag";
import { setSnackbarMessage } from "../../features/snackbar/snackbarSlice";

interface IProfile { }

const Profile: FC<IProfile> = () => {
    const { user } = useAuth0();

    const [page, setPage] = useState(1);

    const dispatch = useAppDispatch();

    const { data, isFetching, } = useGetAllBattletagsQuery({ userId: user?.sub, page });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [deleteBattletag, _] = useDeleteBattletagMutation();

    const handlePageChange = (page: number) => setPage(page);

    const handleDeleteBattletag = async (id: number) => {
        dispatch(setSelected(undefined));

        await deleteBattletag(id);

        dispatch(setSnackbarMessage("Battletag removed"));
    };
    
    const globalBattletag = useAppSelector(selectedBattletag);

    const handleSelectBattletag = (b: IBattletag) => {

        dispatch(setSelected(b));
        
        if(!globalBattletag){
            dispatch(setSnackbarMessage(`Battletag ${b.urlName} selected`));
        }
    };

    return (
        <ViewProvider heading={"Profile"} breadcrumbs={breadcrumbs}>
            <Grid container>
                <Grid item xs={12}>
                    <Button variant={"contained"} component={NavLink} to={"/profile/add-battletag"}>{"Add Battletag"}</Button>
                </Grid>
                <Grid minHeight={400} item xs={12} sm={8} lg={6} xl={4}>
                    <BattletagList
                        battletags={data?.data}
                        loading={isFetching}
                        itemClick={handleSelectBattletag}
                        itemDelete={handleDeleteBattletag}
                    />
                    {!isFetching && data?.data &&
                        <Grid container item xs={12} >
                            <Pagination
                                page={page}
                                count={data.pages}
                                color={"primary"}
                                onChange={(_, page) => handlePageChange(page)}
                                onError={(e) => console.log(e)}
                                size={"large"}
                            />
                        </Grid>
                    }
                </Grid>
            </Grid>
        </ViewProvider>
    );
};

export default Profile;