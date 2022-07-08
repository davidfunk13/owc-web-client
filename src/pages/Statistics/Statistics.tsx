import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import { Breadcrumb } from "../../types/IBreadcrumb";

interface IStatistics { }

const breadcrumbs: Breadcrumb[] = [
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