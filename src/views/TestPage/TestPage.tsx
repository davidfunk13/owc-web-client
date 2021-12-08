import AppLoading from "../AppLoading/AppLoading";
import { Button, } from "@chakra-ui/button";
import { FC, } from "react";
import GetAccessTokenSilently from "../../models/GetAccessTokenSilently";
import React from "react";
import testThunk from "../../redux/thunks/testThunk/testThunk";
import { AppDispatch, useAppDispatch, useAppSelector, } from "../../redux/store";
import { Heading, Text, } from "@chakra-ui/layout";
import { selectLoading, selectMessage, } from "../../redux/reducers/battletag/battletagSlice";
import { useAuth0, withAuthenticationRequired, } from "@auth0/auth0-react";

interface ITestPageProps { }

export const callApi = async (dispatch: AppDispatch, getToken: ()=> Promise<string> ) => {
	const token = await getToken();

	dispatch(testThunk(token));
};

const TestPage: FC<ITestPageProps> = (): JSX.Element => {
	
	const dispatch = useAppDispatch();

	const message = useAppSelector(selectMessage);

	const loading = useAppSelector(selectLoading);

	const { getAccessTokenSilently, } = useAuth0();
	
	return (
		<>
			<Heading>Result</Heading>
			{loading && <AppLoading/>}
			{message && (
				<div data-testid={"api-result"}>
					<Text>{message}</Text>
				</div>
			)}
			<Button onClick={() => callApi(dispatch, getAccessTokenSilently)}>
				Ping API
			</Button>
		</>
	);
};

export default withAuthenticationRequired(TestPage, { onRedirecting: () => <AppLoading /> as JSX.Element, });
