import { Typography } from "@mui/material";
import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";

interface TrackGamesProps { }

const TrackGames: FC<TrackGamesProps> = () => {
    return (
        <ViewProvider>
            <Typography variant={"h1"}>
                {"Track Games"}
            </Typography>
        </ViewProvider>
    );
};

export default TrackGames;