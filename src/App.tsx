import axios from "./utils/axiosInstance";
import logo from "./logo.svg";
import React, { FC, useEffect, } from "react";
import "./App.css";

async function fuckU() {
	const shit = await axios.get("/open");

	console.log(shit.data);
}

interface IAppProps {}

const App: FC<IAppProps> = () => {

	useEffect(() => {
		fuckU();
	}, []);
	
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
			</header>
		</div>
	);
};

export default App;
