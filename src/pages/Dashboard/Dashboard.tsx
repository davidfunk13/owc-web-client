import { Typography } from "@mui/material";
import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";

interface DashboardProps { }

const Dashboard: FC<DashboardProps> = () => {
    return (
        <ViewProvider>
            <Typography variant={"h1"}>
                {"Dashboard"}
            </Typography>
        </ViewProvider>
    );
};

export default Dashboard;