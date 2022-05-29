import { Box, Flex, Icon, Text, useColorModeValue, Link } from "@chakra-ui/react";
import { RiFacebookBoxLine, RiInstagramLine } from "react-icons/ri";

export function Footer(){
    const FooterColorTheme = useColorModeValue("gray.100", "gray.700")
    const IconsTextColorTheme = useColorModeValue("gray.900", "gray.50")
    return (
        <Flex bgColor={FooterColorTheme} as="footer" w="100%" alignItems="center"  flexDirection={{base:'column', lg:'row'}} py="3" px="6">
            <Flex justifyContent="space-between" w="100%" maxWidth={1480} mx="auto">
                <Box>
                    <Text fontSize="sm">©2022 All rights reserved.</Text>
                </Box>
                <Flex gap={4}>
                    <Link target="_blank" href="#0">
                        <Icon cursor="pointer" color={IconsTextColorTheme} as={RiFacebookBoxLine} fontSize="20"/>
                    </Link>
                    <Link target="_blank" href="#0">
                        <Icon cursor="pointer" color={IconsTextColorTheme} as={RiInstagramLine} fontSize="20"/>
                    </Link>
                </Flex>
            </Flex>
        </Flex>
    )
}