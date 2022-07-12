import { CircularProgress, Grid, Pagination, PaginationItem, Stack, Typography } from "@mui/material";
import { FC, useState } from "react";
import { useSearchBattletagsQuery } from "../../app/services/battletagSearch";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import breadcrumbs from "./AddBattletag.breadcrumbs";
import BattletagSearchForm from "./form/BattletagSearchForm/BattletagSearchForm";

interface IAddBattletag { }

const AddBattletag: FC<IAddBattletag> = () => {
    const [battletag, setBattletag] = useState<string>("");
    const [page, setPage] = useState<number>(1);

    const { data, isFetching } = useSearchBattletagsQuery({ battletag, page }, { skip: !battletag });

    const submitSearch = (battletag: string) => {
        setPage(1);
        setBattletag(battletag);
    };

    const handlePageChange = (page: number) => setPage(page);

    return (
        <ViewProvider heading={"Add Battletag"} breadcrumbs={breadcrumbs}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <BattletagSearchForm onSubmit={submitSearch} loading={isFetching} />
                </Grid>

                <Grid item xs={12}>
                    {!isFetching && data?.data.map(item => <Typography>{item.name}</Typography>)}
                    {isFetching && <CircularProgress />}
                    {data?.data &&
                        <Pagination
                            page={page}
                            count={data.pages}
                            color={"primary"}
                            onChange={(_, page) => handlePageChange(page)}
                            size={"large"}
                            showFirstButton
                            showLastButton
                        />
                    }
                </Grid>
            </Grid>
        </ViewProvider>
    );
};

export default AddBattletag;