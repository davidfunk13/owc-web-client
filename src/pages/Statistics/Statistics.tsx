import { Typography } from "@mui/material";
import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";

interface StatisticsProps { }

const Statistics: FC<StatisticsProps> = () => {
    return (
        <ViewProvider>
            <Typography variant={"h1"}>
                {"Statistics"}
            </Typography>
        </ViewProvider>
    );
};

export default Statistics;