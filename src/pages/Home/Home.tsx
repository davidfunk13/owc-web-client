import { Typography } from "@mui/material";
import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";

interface HomeProps { }

const Home: FC<HomeProps> = () => {
    return (
        <ViewProvider>
            <Typography variant={"h1"}>
                {"Home"}
            </Typography>
        </ViewProvider>
    );
};

export default Home;