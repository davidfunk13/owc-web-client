import AppRouter from "./components/AppRouter/AppRouter";
import axios from "./utils/axiosInstance";
import logo from "./logo.svg";
import { useAuth0, } from "@auth0/auth0-react";
import React, { FC, useEffect, } from "react";
import "./App.css";

async function fuckU() {
	const shit = await axios.get("/open");

	console.log(shit.data);
}

interface IAppProps { }

const App: FC<IAppProps> = () => {
	const { isLoading, error, isAuthenticated, loginWithRedirect, logout, } = useAuth0();

	const logoutWithRedirect = () => logout({ returnTo: window.location.origin, });

	useEffect(() => {
		fuckU();
	}, []);

	if (error) {
		return <div>Oops... {error.message}</div>;
	}

	if (isLoading) {
		return <p>LOADING....</p>;
	}
	
	return (
		<div className={"App"}>
			<header className={"App-header"}>
				<img src={logo} className={"App-logo"} alt={"logo"} />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className={"App-link"}
					href={"https://reactjs.org"}
					target={"_blank"}
					rel={"noopener noreferrer"}
				>
					Learn React
				</a>
				{!isAuthenticated ?
					<button onClick={() => loginWithRedirect()}>Login</button>
					:
					<button onClick={() => logoutWithRedirect()}>Logout</button>
				}
			</header>
			<AppRouter/>
		</div>
	);
};

export default App;
