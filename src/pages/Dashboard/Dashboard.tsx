import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
import breadcrumbs from "./Dashboard.breadcrumbs";

interface IDashboard { }

const Dashboard: FC<IDashboard> = () => {
    return (
        <ViewProvider heading={"Dashboard"} breadcrumbs={breadcrumbs}>

        </ViewProvider>
    );
};

export default Dashboard;