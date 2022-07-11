
import { createTheme, responsiveFontSizes } from "@mui/material";
import typographySettings from "./typography/typographySettings";

export const drawerWidth = 240;

const options = { factor: 7 };

export const theme = responsiveFontSizes(createTheme({
    palette: { mode: "light", },
    ...typographySettings,
    components: {},
}), options);

export const darkTheme = responsiveFontSizes(createTheme({
    palette: {
        mode: "dark",
    },
    ...typographySettings,
    components: {},
}),options 
);