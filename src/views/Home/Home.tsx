import { Box, } from "@chakra-ui/react";
import { useAppDispatch, } from "../../redux/store";
import React, { FC, } from "react";

const Home: FC = () => {
	const dispatch = useAppDispatch();

	return (
		<Box textAlign={"center"} fontSize={"xl"}>
			Home
		</Box>
	);
};

export default Home;
