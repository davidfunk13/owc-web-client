import App from "./App";
import { Auth0Provider, } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom";
import history from "./utils/history";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const onRedirectCallback = (appState: any) => {
	history.push(
		appState && appState.returnTo ? appState.returnTo : window.location.pathname
	);
};

const providerConfig = {
	domain:      process.env.REACT_APP_DOMAIN as string,
	clientId:    process.env.REACT_APP_CLIENT_ID as string,
	audience:    process.env.REACT_APP_AUDIENCE as string,
	redirectUri: window.location.origin,
	onRedirectCallback,
};

ReactDOM.render(
	<React.StrictMode>
		<Auth0Provider {...providerConfig}>
			<App />
		</Auth0Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
