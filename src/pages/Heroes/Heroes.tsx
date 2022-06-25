import { Typography } from "@mui/material";
import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";

interface HeroesProps { }

const Heroes: FC<HeroesProps> = () => {
    return (
        <ViewProvider>
            <Typography variant={"h1"}>
                {"Heroes"}
            </Typography>
        </ViewProvider>
    );
};

export default Heroes;