import {
  Box, Code, Grid, Link, Text, VStack
} from "@chakra-ui/react";
import React, { FC } from "react";
import RTKTest from "../components/RTKTest";
import { Logo } from "../Logo";

interface IAppProps {

}

const App: FC<IAppProps> = () => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Text>
            Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
          </Text>
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
        <RTKTest/>
      </Grid>
    </Box>

  )
}

export default App