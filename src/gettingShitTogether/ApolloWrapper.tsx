import { setContext, } from "@apollo/client/link/context";
import { useAuth0, } from "@auth0/auth0-react";
import {
	ApolloClient,
	ApolloProvider,
	HttpLink,
	InMemoryCache,
} from "@apollo/client";
import React, { FC, useEffect, useState, } from "react";

interface IApolloWrapperProps {}

const ApolloWrapper: FC<IApolloWrapperProps> = ({ children, }): JSX.Element => {
	const { isAuthenticated, getAccessTokenSilently, } = useAuth0();

	const [ bearerToken, setBearerToken, ] = useState("");

	const httpLink = new HttpLink({ uri: "http://localhost:3001", });

	useEffect(() => {
		const getToken = async () => {
			const token = isAuthenticated ? await getAccessTokenSilently() : "";

			setBearerToken(token);
		};

		getToken();
	}, [ getAccessTokenSilently, isAuthenticated, ]);

	const authLink = setContext((_, { headers, ...rest }) => {
		if (!bearerToken) return {
			headers,
			...rest, 
		};

		return {
			...rest,
			headers: {
				...headers,
				authorization: `Bearer: ${bearerToken}`,
			},
		};
	});

	const client = new ApolloClient({
		cache: new InMemoryCache(),
		link:  authLink.concat(httpLink),
	});

	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloWrapper;
