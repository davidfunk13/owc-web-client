import { Grid, } from "@mui/material";
import { FC, ReactNode } from "react";

interface ViewLayoutProps {
    children: ReactNode
}

const ViewLayout: FC<ViewLayoutProps> = ({ children }: ViewLayoutProps) => {
    return (
        <Grid container spacing={2} m={1}>
            {children}
        </Grid>
    );
};

export default ViewLayout;
