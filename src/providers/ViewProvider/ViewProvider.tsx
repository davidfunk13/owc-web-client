import { Box } from "@mui/system";
import { FC, ReactNode } from "react";
import AppSnackbar from "../../components/AppSnackbar/AppSnackbar";

interface ViewProviderProps {
    children: ReactNode
    hasSnackbar?: boolean
}

const ViewProvider: FC<ViewProviderProps> = ({ children }: ViewProviderProps) => {
    return (
        <Box component={"main"} sx={{ p: 3 }}>
            {children}
            <AppSnackbar/>
        </Box>
    );
};

export default ViewProvider;
