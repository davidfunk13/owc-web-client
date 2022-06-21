
import { createTheme, responsiveFontSizes } from "@mui/material";

export const theme = responsiveFontSizes(
    createTheme({
        palette: {
            mode: "light",
        },
        // ...typographySettings,
        components: {},
    })
);

export const darkTheme = responsiveFontSizes(
    createTheme({
        palette: {
            mode: "dark",
        },
        // ...typographySettings,
        components: {},
    })
);

