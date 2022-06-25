import { Typography } from "@mui/material";
import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";

interface UnauthorizedProps { }

const Unauthorized:FC<UnauthorizedProps> = () => {
    return (
        <ViewProvider>
            <Typography variant={"h1"}>
                {"Unauthorized View"}
            </Typography>
        </ViewProvider>
    );
};
export default Unauthorized;