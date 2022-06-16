import { Alert, Grid, Snackbar, Typography } from "@mui/material";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { selectSnackbarMessage, selectSnackbarVariant, openSnackbar } from "./features/snackbar/snackbarSlice"
import NavBar from "./features/navbar/component/NavBar"
import ViewLayout from "./layouts/ViewLayout/ViewLayout";
import { ThemeProvider } from '@mui/material/styles';
import { theme, darkTheme } from './theme/theme'
import { selectDark} from "./features/ui/uiSlice";
interface AppProps { }

const App: FC<AppProps> = () => {
  const dispatch = useAppDispatch();
  const snackbarMessage = useAppSelector(selectSnackbarMessage);
  const snackbarVariant = useAppSelector(selectSnackbarVariant);
  const snackbarOpen = !!snackbarMessage;

  const handleCloseSnackbar = () => dispatch(openSnackbar(false));
  const isDark = useAppSelector(selectDark);

  return (
    <ThemeProvider theme={isDark ? darkTheme : theme}>
      <Grid container>
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
    </ThemeProvider>
  );
};

export default App;
