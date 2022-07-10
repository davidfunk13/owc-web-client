import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import IBreadcrumb from "../../types/IBreadcrumb";

interface IDashboard { }

const breadcrumbs: IBreadcrumb[] = [
    {
        name: "Dashboard",
        bold: true
    },
];

const Dashboard: FC<IDashboard> = () => {
    return (
        <ViewProvider heading={"Dashboard"} breadcrumbs={breadcrumbs}>
          
        </ViewProvider>
    );
};

export default Dashboard;