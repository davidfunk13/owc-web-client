import React, { FC } from 'react'
import {
    Box,
    Text,
    Link,
    VStack,
    Code,
    Button,
    Grid,
} from "@chakra-ui/react"
import { Logo } from "../../Logo"
import { AppDispatch, useAppDispatch, useAppSelector } from '../../redux/store';
import { selectBattletagAnus, setAnus } from '../../redux/reducers/battletag/battletagSlice';
import { useAuth0 } from '@auth0/auth0-react';

export function goSetThatAnus(dispatch: AppDispatch, anus: boolean) {
    dispatch(setAnus(!anus))
}

const Home: FC = () => {
    const dispatch = useAppDispatch();

    const anus = useAppSelector(selectBattletagAnus);

    const { isLoading, error, } = useAuth0();

    if (error) {
        return <div>Oops... {error.message}</div>;
    }

    if (isLoading) {
        return <p>LOADING....</p>;
    }

    return (
        <Box textAlign="center" fontSize="xl">
            <Grid minH="100vh" p={3}>
                <VStack spacing={8}>
                    <Logo h="40vmin" pointerEvents="none" />
                    <Text>
                        Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
                    </Text>
                    <Text>
                        Anus: {anus.toString()}
                    </Text>
                    <Button onClick={() => goSetThatAnus(dispatch, anus)}>Set Anus</Button>
                    <Link
                        color="teal.500"
                        href="https://chakra-ui.com"
                        fontSize="2xl"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn Chakra
                    </Link>
                </VStack>

            </Grid>
        </Box>
    )
}
export default Home