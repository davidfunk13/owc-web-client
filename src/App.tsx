
import { useAppSelector } from "./app/hooks";
import { ThemeProvider } from "@mui/material/styles";
import { theme, darkTheme } from "./theme/theme";
import { selectDark } from "./app/features/theme/themeSlice";
import NavBar from "./components/NavBar/NavBar";
import ViewProvider from "./providers/ViewProvider/ViewProvider";
import { FC } from "react";
import AppDrawer from "./components/AppDrawer/AppDrawer";
import { dark } from "@mui/material/styles/createPalette";

interface AppProps { }

const App: FC<AppProps> = () => {

    const isDark = useAppSelector(selectDark);

    const selectedTheme = (isDark: boolean) => isDark ? darkTheme : theme;
    return (
        <ThemeProvider theme={selectedTheme(isDark)}>
            <NavBar>
                <AppDrawer />
            </NavBar>
            <ViewProvider>
            </ViewProvider>
        </ThemeProvider>
    );
};

export default App;