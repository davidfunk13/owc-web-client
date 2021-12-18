import * as React from "react";
import AppMain from "./components/AppMain/AppMain";
import Home from "./views/Home/Home";
import TestPage from "./views/TestPage/TestPage";
import { BrowserRouter, Link, Route, Routes, } from "react-router-dom";

export const App = () => {

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

