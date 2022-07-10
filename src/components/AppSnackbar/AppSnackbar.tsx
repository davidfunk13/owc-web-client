import { Alert, Snackbar } from "@mui/material";
import { FC } from "react";
import { openSnackbar, selectSnackbarMessage, selectSnackbarVariant } from "../../features/snackbar/snackbarSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

interface IAppSnackbar { }

const AppSnackbar: FC<IAppSnackbar> = () => {
    const dispatch = useAppDispatch();
    const snackbarMessage = useAppSelector(selectSnackbarMessage);
    const snackbarVariant = useAppSelector(selectSnackbarVariant);
    const snackbarOpen = !!snackbarMessage;

    const handleCloseSnackbar = () => dispatch(openSnackbar(false));
    return (
        <Snackbar
            data-testid={"snackbar"}
            open={snackbarOpen}
            autoHideDuration={5000}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            onClose={handleCloseSnackbar}
        >
            <Alert data-testid={"snackbar-message"} severity={snackbarVariant} onClose={handleCloseSnackbar}>
                {snackbarMessage}
            </Alert>
        </Snackbar>
    );
};

export default AppSnackbar;