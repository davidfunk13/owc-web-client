import NavBar from "../NavBar/NavBar";
import { Outlet, } from "react-router-dom";
import React, { FC, } from "react";

interface IAppMainProps {}

const AppMain: FC<IAppMainProps> = () => {
	return (
		<>
			<NavBar />
			<Outlet />
		</>
	);
};

export default AppMain;
