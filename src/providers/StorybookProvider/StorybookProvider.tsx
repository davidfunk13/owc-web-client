import { Auth0Provider } from "@auth0/auth0-react";
import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { muiCache } from "../..";
import { store } from "../../app/store";
import MuiThemeProvider from "../MuiThemeProvider/MuiThemeProvider";


interface StorybookProviderProps {
    children: ReactNode
}

const StorybookProvider: FC<StorybookProviderProps> = ({ children}) => {
    return (
        <Auth0Provider
            domain={String(process.env.REACT_APP_AUTH0_DOMAIN)}
            clientId={String(process.env.REACT_APP_AUTH0_CLIENT_ID)}
            redirectUri={window.location.origin}
        >
            <Provider store={store}>
                <CacheProvider value={muiCache}>
                    <MuiThemeProvider>
                        <CssBaseline />
                        <MemoryRouter>
                            {children}
                        </MemoryRouter>
                    </MuiThemeProvider>
                </CacheProvider>
            </Provider>
        </Auth0Provider>
    );
};

export default StorybookProvider;