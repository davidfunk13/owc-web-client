import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import IBreadcrumb from "../../types/IBreadcrumb";

interface IStatistics { }

const breadcrumbs: IBreadcrumb[] = [
    {
        name: "Statistics",
        bold: true
    },
];

const Statistics: FC<IStatistics> = () => {
    return (
        <ViewProvider heading={"Statistics"} breadcrumbs={breadcrumbs}>
        
        </ViewProvider>
    );
};

export default Statistics;