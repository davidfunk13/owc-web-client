import React, { FC } from 'react'
import {
    Box,
    Text,
    VStack,
    Grid,
    Spinner
} from "@chakra-ui/react"

interface IAppLoadingProps {}

const AppLoading: FC<IAppLoadingProps> = () => {
    return (
        <Box textAlign="center" fontSize="xl">
            <Grid minH="100vh" p={3}>
                <VStack spacing={8}>
                    <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="blue.500"
                        size="xl"
                    />
                    <Text>
                        Loading...
                    </Text>

                </VStack>

            </Grid>
        </Box>
    )
}

export default AppLoading