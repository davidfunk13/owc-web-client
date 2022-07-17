import { Folder as FolderIcon } from "@mui/icons-material";
import { Avatar, CircularProgress, Grid, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Pagination, PaginationItem, Stack, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useSaveBattletagMutation, useSearchBattletagsQuery } from "../../app/services/battletagApi";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import IBattletag from "../../types/IBattletag";
import breadcrumbs from "./AddBattletag.breadcrumbs";
import BattletagSearchForm from "./form/BattletagSearchForm/BattletagSearchForm";

interface IAddBattletag { }

const AddBattletag: FC<IAddBattletag> = () => {
    const [battletag, setBattletag] = useState<string>("");
    const [page, setPage] = useState<number>(1);
    const { data, isFetching } = useSearchBattletagsQuery({ battletag, page }, { skip: !battletag });
    const [saveBattletag, result] = useSaveBattletagMutation();

    const submitSearch = (battletag: string) => {
        setPage(1);
        setBattletag(battletag);
    };
    useEffect(() => {
        console.log({ result });
    }, [result]);

    const handlePageChange = (page: number) => setPage(page);

    return (
        <ViewProvider heading={"Add Battletag"} breadcrumbs={breadcrumbs}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <BattletagSearchForm onSubmit={submitSearch} loading={isFetching} />
                </Grid>

                <Grid item xs={12}>
                    {!isFetching && data?.data.map(item =>
                        <List dense={false}>
                            <ListItemButton onClick={() => saveBattletag(item)}>
                                <ListItemAvatar>
                                    <Avatar src={`${process.env.REACT_APP_ICON_BUCKET + item.portrait}.png`} />
                                </ListItemAvatar>
                                <ListItemText
                                    title={"p"}
                                    primary={item.name}
                                    secondary={item.platform.toUpperCase()}
                                />
                            </ListItemButton>
                        </List>
                    )}
                    {isFetching && <CircularProgress />}
                    {data?.data &&
                        <Pagination
                            page={page}
                            count={data.pages}
                            color={"primary"}
                            onChange={(_, page) => handlePageChange(page)}
                            onError={(e) => console.log(e)}
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