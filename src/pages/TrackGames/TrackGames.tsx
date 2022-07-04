import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import { Breadcrumb } from "../../types/IBreadcrumb";

interface TrackGamesProps { }

const breadcrumbs: Breadcrumb[] = [
    {
        name: "Track Games",
        bold: true
    },
];

const TrackGames: FC<TrackGamesProps> = () => {
    return (
        <ViewProvider heading={"Track Games"} breadcrumbs={breadcrumbs}>
     
        </ViewProvider>
    );
};

export default TrackGames;