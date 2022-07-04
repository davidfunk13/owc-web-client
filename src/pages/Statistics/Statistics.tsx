import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import { Breadcrumb } from "../../types/IBreadcrumb";

interface StatisticsProps { }

const breadcrumbs: Breadcrumb[] = [
    {
        name: "Statistics",
        bold: true
    },
];

const Statistics: FC<StatisticsProps> = () => {
    return (
        <ViewProvider heading={"Statistics"} breadcrumbs={breadcrumbs}>
        
        </ViewProvider>
    );
};

export default Statistics;