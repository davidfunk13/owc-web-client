import { Typography } from "@mui/material";
import { FC } from "react";
import ViewProvider from "../../providers/ViewProvider/ViewProvider";
interface PageNotFoundProps {

}

const PageNotFound: FC<PageNotFoundProps> = () => {
    return (
        <ViewProvider>
            <Typography variant={"h1"}>
                {"404 Page Not Found"}
            </Typography>
        </ViewProvider>
    );
};

export default PageNotFound;