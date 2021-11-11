import { Auth0Provider, useAuth0 } from "@auth0/auth0-react"
import { ColorModeScript, ChakraProvider, theme } from "@chakra-ui/react"
import * as React from "react"
import ReactDOM from "react-dom"
import { App } from "./App"
import reportWebVitals from "./reportWebVitals"
import * as serviceWorker from "./serviceWorker"
import history from "./utils/history"
import { Provider, } from "react-redux";
import { store, } from "./redux/store";

const onRedirectCallback = (appState: any) => {
	history.push(
		appState && appState.returnTo ? appState.returnTo : window.location.pathname
	);
};

const providerConfig = {
	domain: process.env.REACT_APP_DOMAIN as string,
	clientId: process.env.REACT_APP_CLIENT_ID as string,
	audience: process.env.REACT_APP_AUDIENCE as string,
	redirectUri: window.location.origin,
	cacheLocation:"localstorage" as any,
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
	document.getElementById("root"),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
