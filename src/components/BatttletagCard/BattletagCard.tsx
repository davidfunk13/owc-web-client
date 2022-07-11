import { Box, Card, CardContent, CardMedia, IconButton, Typography, } from "@mui/material";
import { FC } from "react";
import IBattletag from "../../types/IBattletag";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

interface IBattletagCard {
    battletag: IBattletag
}

const BattletagCard: FC<IBattletagCard> = ({ battletag }) => {
    return (
        <Card sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component={"div"} variant={"h5"}>
                        {"Live From Space"}
                    </Typography>
                    <Typography variant={"subtitle1"} color={"text.secondary"} component={"div"}>
                        {"Mac Miller"}
                    </Typography>
                </CardContent>
                <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                    <IconButton aria-label={"previous"}>
                        <SkipPreviousIcon />
                    </IconButton>
                    <IconButton aria-label={"play/pause"}>
                        <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                    </IconButton>
                    <IconButton aria-label={"next"}>
                        <SkipNextIcon />
                    </IconButton>
                </Box>
            </Box>
            <CardMedia
                component={"img"}
                sx={{ width: 151 }}
                image={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}
                alt={"Live from space album cover"}
            />
        </Card>
    );
};

export default BattletagCard;