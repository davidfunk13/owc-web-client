import AddHabit from "../../gettingShitTogether/AddHabit";
import AppLoading from "../AppLoading/AppLoading";
import { FC, } from "react";
import React from "react";
import { withAuthenticationRequired, } from "@auth0/auth0-react";

interface ITestPageProps { }

const TestPage: FC<ITestPageProps> = (): JSX.Element => {
	
	return (
		<div className={"container"}>
			<AddHabit />
		</div>
	);
};

export default withAuthenticationRequired(TestPage, { onRedirecting: () => <AppLoading /> as JSX.Element, });
