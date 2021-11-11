import instance from "../../utils/axiosInstance";
import React, { useState, } from "react";
import { useAuth0, withAuthenticationRequired, } from "@auth0/auth0-react";
import { Heading, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import AppLoading from "../AppLoading/AppLoading";

const TestPage = () => {

	const [state, setState,] = useState({
		showResult: false,
		apiMessage: "",
		error: null,
	});

	const {
		getAccessTokenSilently,
		// loginWithPopup,
		// getAccessTokenWithPopup,
	} = useAuth0();

	const callApi = async () => {
		try {
			const token = await getAccessTokenSilently();

			const response = await instance.get("/protected",
				{ headers: { Authorization: `Bearer ${token}`, }, })
				.then(data => data).catch(err => console.log({ err, }));

			setState({
				...state,
				showResult: true,
				apiMessage: (response as any).data,
			});
		} catch (error) {
			setState({
				...state,
				error: (error as any).error,
			});
		}
	};

	return (
		<>
			<Heading>Result</Heading>
			{state.showResult && (
				<div data-testid={"api-result"}>
					<Text>{JSON.stringify(state.apiMessage, null, 2)}</Text>
				</div>
			)}
			<Button onClick={callApi}>
				Ping API
			</Button>
		</>
	);
};

export default withAuthenticationRequired(TestPage, { onRedirecting: () => <AppLoading />, });