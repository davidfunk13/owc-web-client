import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import { Breadcrumb } from "../../types/IBreadcrumb";

interface ITrackGames { }

const breadcrumbs: Breadcrumb[] = [
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