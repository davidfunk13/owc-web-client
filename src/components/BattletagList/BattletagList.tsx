import { Close, Lock, LockOpen } from "@mui/icons-material";
import { Avatar, CircularProgress, Grid, IconButton, List, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";
import { FC, SyntheticEvent } from "react";
import IBattletag from "../../types/IBattletag";

interface IBattletagListProps {
    dense?: boolean
    battletags?: IBattletag[]
    loading?: boolean
    itemClick?: (item: IBattletag) => void
    itemDelete?: (id: number) => void
}

const BattletagList: FC<IBattletagListProps> = ({ dense, loading, battletags = [], itemClick, itemDelete }) => {

    const handleClickListItem = (item: IBattletag, e: SyntheticEvent) => {

        if (!itemClick) {
            return;
        }

        itemClick(item);
    };

    const handleDeleteListItem = (id: number, e: SyntheticEvent) => {
        e.stopPropagation();

        if (!itemDelete) {
            return;
        }

        itemDelete(id);
    };

    return !loading ?
        <List dense={dense}>
            {!loading && battletags.map(
                battletag =>
                    <ListItemButton onClick={(e) => handleClickListItem(battletag, e)} >
                        <Grid container justifyItems={"space-evenly"} alignItems={"center"}>
                            <Grid item xs={2}>
                                <ListItemAvatar>
                                    <Avatar src={`${process.env.REACT_APP_ICON_BUCKET + battletag.portrait}.png`} />
                                </ListItemAvatar>
                            </Grid>
                            <Grid container alignItems={"center"} item xs={6}>
                                <ListItemText
                                    primary={battletag.name}
                                    secondary={battletag.platform.toUpperCase()}
                                />
                                <Grid item xs={2}>
                                    {battletag.isPublic ? <Lock /> : <LockOpen />}
                                </Grid>
                            </Grid>
                            {!!itemDelete &&
                                <Grid item xs={2}>
                                    <IconButton onClick={(e) => handleDeleteListItem(battletag.id, e)}>
                                        <Close />
                                    </IconButton>
                                </Grid>
                            }
                        </Grid>
                    </ListItemButton>
            )}
        </List> 
        :
        <Grid container justifyContent={"center"} item xs={12}>
            <CircularProgress size={100} />
        </Grid>;
};
export default BattletagList;