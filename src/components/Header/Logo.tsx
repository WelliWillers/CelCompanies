import { Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export function Logo(){ 
    const {asPath} = useRouter()
    return (
        <Text textAlign={{base: asPath != "/" ? 'right' : 'center', md: 'center', lg: 'left'}} pb={{base: 3, lg: 0}} fontSize={['2xl', '3xl']} fontWeight="bold" letterSpacing="tight" w="64">
            Cel
            <Text color="primary.normal" as="span">Focus</Text>
        </Text>
    )
}