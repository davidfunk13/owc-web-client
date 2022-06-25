import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { FC, ReactNode } from "react";
import AppSnackbar from "../../components/AppSnackbar/AppSnackbar";
import useStyles from "./ViewProvider.styles";

interface ViewProviderProps {
    children: ReactNode
    hasSnackbar?: boolean
}

const ViewProvider: FC<ViewProviderProps> = ({ children }: ViewProviderProps) => {
    const {classes} = useStyles();
    
    return ( 
        <Box component={"main"}className={classes.container}>
            <Toolbar/>
            {children}
            <AppSnackbar/>
        </Box>
    );
};

export default ViewProvider;
