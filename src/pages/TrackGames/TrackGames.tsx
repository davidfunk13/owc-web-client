import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import IBreadcrumb from "../../types/IBreadcrumb";

interface ITrackGames { }

const breadcrumbs: IBreadcrumb[] = [
    {
        name: "Track Games",
        bold: true
    },
];

const TrackGames: FC<ITrackGames> = () => {
    return (
        <ViewProvider heading={"Track Games"} breadcrumbs={breadcrumbs}>
     
        </ViewProvider>
    );
};

export default TrackGames;