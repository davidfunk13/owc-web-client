
import { useAppSelector } from "./app/hooks"
import { ThemeProvider } from '@mui/material/styles';
import { theme, darkTheme } from './theme/theme'
import { selectDark } from "./app/features/theme/themeSlice";
import NavBar from "./components/NavBar/NavBar";
import ViewProvider from './providers/ViewProvider/ViewProvider';
import { FC } from "react";
import AppDrawer from "./components/AppDrawer/AppDrawer";

interface AppProps { }

const App: FC<AppProps> = () => {

  const isDark = useAppSelector(selectDark);

  return (
    <ThemeProvider theme={isDark ? darkTheme : theme}>
      <NavBar>
        <AppDrawer />
      </NavBar>
      <ViewProvider>
      </ViewProvider>
    </ThemeProvider>
  );
}

export default App;