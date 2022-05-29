import { Box, Flex, Text } from "@chakra-ui/react";

export function Footer(){
    return (
        <Flex bgColor="gray.700" as="footer" w="100%" alignItems="center"  flexDirection={{base:'column', lg:'row'}} py="3" px="6">
            <Box w="100%" maxWidth={1480} mx="auto">
                <Text fontSize="sm">©2022 All rights reserved.</Text>
            </Box>
        </Flex>
    )
}