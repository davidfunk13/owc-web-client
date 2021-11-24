import ApiError from "../../models/ApiError";
import ApiResponse from "../../models/ApiResponse";
import AppLoading from "../AppLoading/AppLoading";
import { Button, } from "@chakra-ui/button";
import { FC, } from "react";
import axios from "../../utils/axiosInstance";
import { Heading, Text, } from "@chakra-ui/layout";
import React, { useState, } from "react";
import { useAuth0, withAuthenticationRequired, } from "@auth0/auth0-react";

interface ITestPageProps{}

const TestPage: FC<ITestPageProps> = (): JSX.Element => {

	const [ state, setState, ] = useState({
		showResult: false,
		apiMessage: "",
		error:      "",
	});

	const { getAccessTokenSilently, } = useAuth0();

	const callApi = async () => {
		try {
			const token = await getAccessTokenSilently();

			const response = await axios.get("/protected",
				{ headers: { Authorization: `Bearer ${token}`, }, })
				.then(data => data).catch(err => console.log({ err, }));

			setState({
				...state,
				showResult: true,
				apiMessage: (response as ApiResponse).data as string,
			});
		} catch (error) {
			setState({
				...state,
				error: (error as ApiError).error,
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

export default withAuthenticationRequired(TestPage, { onRedirecting: () => <AppLoading/> as JSX.Element, });
