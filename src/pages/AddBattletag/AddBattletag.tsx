import { useAuth0 } from "@auth0/auth0-react";
import { Box, Card, Grid, Pagination } from "@mui/material";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSaveBattletagMutation, useSearchBattletagsQuery } from "../../services/battletagApi";
import BattletagList from "../../components/BattletagList/BattletagList";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import IBattletag from "../../types/IBattletag";
import breadcrumbs from "./AddBattletag.breadcrumbs";
import BattletagSearchForm from "./form/BattletagSearchForm/BattletagSearchForm";
import { useAppDispatch } from "../../app/hooks";
import { setSnackbarMessage } from "../../features/snackbar/snackbarSlice";

interface IAddBattletag { }

const AddBattletag: FC<IAddBattletag> = () => {
    const [battletag, setBattletag] = useState<string>("");

    const dispatch = useAppDispatch();

    const [page, setPage] = useState<number>(1);

    const { data, isFetching, } = useSearchBattletagsQuery({ battletag, page }, { skip: !battletag });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [saveBattletag, _] = useSaveBattletagMutation();

    const { user } = useAuth0();

    const navigate = useNavigate();

    const submitSearch = (battletag: string) => {
        setPage(1);

        setBattletag(battletag);
    };

    const handleSaveBattletag = async (battletag: IBattletag) => {
        await saveBattletag({ ...battletag, userId: user?.sub });

        dispatch(setSnackbarMessage("Battletag successfully added to user's profile."));

        navigate("/profile");
    };

    const handlePageChange = (page: number) => setPage(page);

    return (
        <ViewProvider heading={"Add Battletag"} breadcrumbs={breadcrumbs}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Card elevation={0} variant={"outlined"} component={Box} p={2}>
                        <BattletagSearchForm onSubmit={submitSearch} loading={isFetching} />
                    </Card>
                </Grid>
            </Grid>
            <Grid container spacing={2} >
                <Grid item xs={12} sm={8} lg={6} xl={4}>
                    <BattletagList loading={isFetching} battletags={data?.data} itemClick={handleSaveBattletag} />
                    {!isFetching && !!data?.data.length &&
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

export default AddBattletag;