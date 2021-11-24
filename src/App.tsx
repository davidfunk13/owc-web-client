import * as React from "react";
import AppMain from "./components/AppMain/AppMain";
import TestPage from "./views/TestPage/TestPage";
import { useAuth0, } from "@auth0/auth0-react";
import { BrowserRouter, Link, Route, Routes, } from "react-router-dom";

export const App = () => {
	const { isAuthenticated, } = useAuth0();

	console.log(isAuthenticated);
	
	return (
		<BrowserRouter>
			<Routes>
				<Route path={"/"} element={<AppMain/>}>
					<Route index element={<Home />} />
					<Route path={"about"} element={<About />} />
					<Route path={"dashboard"} element={<Dashboard />} />
					<Route path={"protected"} element={<TestPage />} />
					<Route path={"*"} element={<NoMatch />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

function Home() {
	return (
		<div>
			<h2>Home</h2>
		</div>
	);
}

function About() {
	return (
		<div>
			<h2>About</h2>
		</div>
	);
}

function Dashboard() {
	return (
		<div>
			<h2>Dashboard</h2>
		</div>
	);
}

function NoMatch() {
	return (
		<div>
			<h2>Nothing to see here!</h2>
			<p>
				<Link to={"/"}>Go to the home page</Link>
			</p>
		</div>
	);
}

