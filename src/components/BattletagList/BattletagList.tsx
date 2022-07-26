import { Close } from "@mui/icons-material";
import { Avatar, Box, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";
import { FC } from "react";
import IBattletag from "../../types/IBattletag";

interface IBattletagListProps {
    dense?: boolean
    battletags: IBattletag[]
    clickable?: boolean
    deletable?: boolean
    itemClick?: (item: IBattletag) => void
    itemDelete?: (id: number) => void
}

const BattletagList: FC<IBattletagListProps> = ({ dense, battletags, itemClick, clickable, deletable, itemDelete }) => {

    const handleClickListItem = (item: IBattletag) => {
        if (!itemClick) {
            return;
        }
        itemClick(item);
    };

    const handleDeleteListItem = (id: number) => {
        if (!itemDelete) {
            return;
        }

        itemDelete(id);
    };

    const BattletagItemContent = ({ battletag }: { battletag: IBattletag }) => {
        return <Box>
            <ListItemText
                primary={battletag.name}
                secondary={battletag.platform.toUpperCase()}
            />
            <ListItemText
                primary={"Is Public:"}
                secondary={battletag.isPublic.toString()}
            />
        </Box>;
    };

    const BattletagAvatar = ({ battletag }: { battletag: IBattletag }) => {
        return (
            <ListItemAvatar>
                <Avatar src={`${process.env.REACT_APP_ICON_BUCKET + battletag.portrait}.png`} />
            </ListItemAvatar>
        );
    };


    const ClickableItem = ({ battletag }: { battletag: IBattletag }) => {
        return (
            <ListItemButton onClick={() => handleClickListItem(battletag)} >
                <BattletagAvatar battletag={battletag} />
                <BattletagItemContent battletag={battletag} />
            </ListItemButton>
        );
    };

    const NonClickableItem = ({ battletag }: { battletag: IBattletag }) => {
        return (
            <ListItem>
                <BattletagAvatar battletag={battletag} />
                <BattletagItemContent battletag={battletag} />
            </ListItem>
        );
    };


    //implement
    const DeletableItem = ({ battletag }: { battletag: IBattletag }) => {
        return (
            <ListItem>
                <IconButton onClick={() => handleDeleteListItem(battletag.id)}>
                    <Close />
                </IconButton>
            </ListItem>
        );
    };

    return (
        <List dense={false}>
            {battletags.map(battletag => clickable ? <ClickableItem battletag={battletag} /> : <NonClickableItem battletag={battletag} />)}
        </List>
    );
};
export default BattletagList;