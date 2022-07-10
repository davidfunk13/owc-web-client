import { FC, ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { useAppSelector } from "../../app/hooks";
import { selectDark } from "../../features/theme/themeSlice";
import selectedTheme from "../../utils/selectedTheme";

interface MuiThemeProviderProps {
    children: ReactNode
}

const MuiThemeProvider: FC<MuiThemeProviderProps> = ({ children }) => {
    const isDark = useAppSelector(selectDark);
   
    return (
        <ThemeProvider theme={selectedTheme(isDark)}>
            {children}
        </ThemeProvider>
    );
};

export default MuiThemeProvider;