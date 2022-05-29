import { Text } from "@chakra-ui/react";

export function Logo(){ 
    return (
        <Text textAlign={{base: 'right', md: 'center', lg: 'left'}} pb={{base: 0, lg: 0}} fontSize={['2xl', '3xl']} fontWeight="bold" letterSpacing="tight" w="64">
            Cel
            <Text color="primary.normal" as="span">Focus</Text>
        </Text>
    )
}