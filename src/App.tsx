
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { selectSnackbarMessage, selectSnackbarVariant, openSnackbar } from "./features/snackbar/snackbarSlice"
import { ThemeProvider } from '@mui/material/styles';
import { theme, darkTheme } from './theme/theme'
import { selectDark } from "./features/theme/themeSlice";
import NavBar from './features/navbar/component/NavBar';
import ViewProvider from './providers/ViewProvider/ViewProvider';
import { FC } from "react";

interface AppProps { }

const App: FC<AppProps> = () => {

  const isDark = useAppSelector(selectDark);

  return (
    <ThemeProvider theme={isDark ? darkTheme : theme}>
      <NavBar />
      <ViewProvider>
      </ViewProvider>
    </ThemeProvider>
  );
}

export default App;