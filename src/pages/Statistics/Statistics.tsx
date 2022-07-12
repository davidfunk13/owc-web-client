import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import breadcrumbs from "./Statistics.breadcrumbs";

interface IStatistics { }

const Statistics: FC<IStatistics> = () => {
    return (
        <ViewProvider heading={"Statistics"} breadcrumbs={breadcrumbs}>

        </ViewProvider>
    );
};

export default Statistics;