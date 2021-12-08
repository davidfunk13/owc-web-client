import * as React from "react";
import * as serviceWorker from "./serviceWorker";
import { App, } from "./App";
import { Provider, } from "react-redux";
import ReactDOM from "react-dom";
import history from "./utils/history";
import reportWebVitals from "./reportWebVitals";
import { store, } from "./redux/store";
import { AppState, Auth0Provider, Auth0ProviderOptions, } from "@auth0/auth0-react";
import { ChakraProvider, ColorModeScript, theme, } from "@chakra-ui/react";

const onRedirectCallback = (appState: AppState) => {
	history.push(
		appState && appState.returnTo ? appState.returnTo : window.location.pathname
	);
};

const providerConfig: Auth0ProviderOptions = {
	domain:           process.env.REACT_APP_DOMAIN ?? "",
	clientId:         process.env.REACT_APP_CLIENT_ID ?? "",
	audience:         process.env.REACT_APP_AUDIENCE,
	redirectUri:      window.location.origin,
	cacheLocation:    "localstorage",
	useRefreshTokens: true,
	onRedirectCallback,
};

ReactDOM.render(
	<React.StrictMode>
		<Auth0Provider {...providerConfig}>
			<Provider store={store}>
				<ColorModeScript />
				<ChakraProvider theme={theme}>
					<App />
				</ChakraProvider>
			</Provider>
		</Auth0Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
