import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import MuiThemeProvider from "./providers/MuiThemeProvider/MuiThemeProvider";
import { CssBaseline } from "@mui/material";
import { Auth0Provider } from "@auth0/auth0-react";

const container = document.getElementById("root")!;
const root = createRoot(container);

export const muiCache = createCache({ key: "mui", prepend: true });

root.render(
    <React.StrictMode>
        <Auth0Provider
            domain={String(process.env.REACT_APP_AUTH0_DOMAIN)}
            clientId={String(process.env.REACT_APP_AUTH0_CLIENT_ID)}
            redirectUri={window.location.origin}
            cacheLocation={"localstorage"}
        >
            <Provider store={store}>
                <CacheProvider value={muiCache}>
                    <MuiThemeProvider>
                        <CssBaseline />
                        <App />
                    </MuiThemeProvider>
                </CacheProvider>
            </Provider>
        </Auth0Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
