import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import breadcrumbs from "./TrackGames.breadcrumbs";

interface ITrackGames { }

const TrackGames: FC<ITrackGames> = () => {
    return (
        <ViewProvider heading={"Track Games"} breadcrumbs={breadcrumbs}>
     
        </ViewProvider>
    );
};

export default TrackGames;