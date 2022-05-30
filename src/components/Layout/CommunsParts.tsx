import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import { ReactNode } from "react"
import { Footer } from "../Footer"
import { Header } from "../Header"

interface CommunsPartsProps {
    title?: string
    subtitle?: string
    children: ReactNode
}

export default function CommunsParts({title, subtitle, children}: CommunsPartsProps){
    return (
        <Box h="100vh">
            <Flex direction="column" height={{base: "100%"}}>
                <Header/>

                <Flex w="100%" h="100%" minHeight="65vh" maxWidth={1480} my="6" px="6" pb="5" mx="auto" flexDirection="column">
                    <Box py="8" textAlign={{base: "center", lg: "left"}}>
                        <Heading>{title ? title : ''}</Heading>
                        <Text fontSize="md">
                            {subtitle}
                        </Text>
                    </Box>

                    {children}
                </Flex>

                <Footer />
            </Flex>
        </Box>
    )
}