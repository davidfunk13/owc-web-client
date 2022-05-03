import { Stack, Text } from "@chakra-ui/react";
import { Suspense } from "react";
import { useGetPokemonByNameQuery } from "../app/services/pokemon/pokemon";

const RTKTest = () => {
    const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')

    return (
        <Suspense fallback={"HI HI HELLO ITS FACKIN LOAING"} >
            <Stack>
                <Text>{data?.name}</Text>
                {data?.stats?.map((item, i) => <Text key={`${item.stat.name}-${i}`}>{item.stat.name}</Text>)}
            </Stack>
        </Suspense>
    )
};
export default RTKTest