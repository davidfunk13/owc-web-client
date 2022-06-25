import { Typography } from "@mui/material";
import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";

interface MapsProps { }

const Maps: FC<MapsProps> = () => {
    return (
        <ViewProvider>
            <Typography variant={"h1"}>
                {"Maps"}
            </Typography>
        </ViewProvider>
    );
};

export default Maps;