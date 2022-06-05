import { Alert, Grid, Snackbar, Typography } from "@mui/material";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { selectSnackbarMessage, selectSnackbarVariant, openSnackbar } from "./features/snackbar/snackbarSlice"
import NavBar from "./components/NavBar/NavBar"
import ViewLayout from "./app/layouts/ViewLayout/ViewLayout";

interface AppProps { }

const App: FC<AppProps> = () => {
  const dispatch = useAppDispatch();
  const snackbarMessage = useAppSelector(selectSnackbarMessage);
  const snackbarVariant = useAppSelector(selectSnackbarVariant);
  const snackbarOpen = !!snackbarMessage;

  const handleCloseSnackbar = () => dispatch(openSnackbar(false));

  return (
    <Grid container style={{ height: "100%" }}>
      <NavBar />
      <ViewLayout>
        <Grid item xs={12} md={6}>
          <Typography variant={"h1"}>H1 Heading 1</Typography>
          <Typography variant={"h2"}>H2 Heading 2</Typography>
          <Typography variant={"h3"}>H3 Heading 3</Typography>
          <Typography variant={"h4"}>H4 Heading 4</Typography>
          <Typography variant={"h5"}>H5 Heading 5</Typography>
          <Typography variant={"h6"}>H6 Heading 6</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant={"h1"}>Yo!</Typography>
        </Grid>
      </ViewLayout>
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
    </Grid>
  );
};

export default App;
