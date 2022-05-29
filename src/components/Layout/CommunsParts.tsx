import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import { ReactNode } from "react"
import { Footer } from "../Footer"
import { Header } from "../Header"

interface CommunsPartsProps {
    title: string
    subtitle?: string
    children: ReactNode
}

export default function CommunsParts({title, subtitle, children}: CommunsPartsProps){
    return (
        <Flex direction="column" minHeight="100%" h={{base: "auto", lg: "100vh"}}>
            <Header/>

            <Flex w="100%" h="100%" maxWidth={1480} my="6" px="6" pb="5" mx="auto" flexDirection="column">
                <Box py="8" textAlign={{base: "center", lg: "left"}}>
                    <Heading>{title}</Heading>
                    <Text fontSize="md">
                        {subtitle}
                    </Text>
                </Box>

                {children}
            </Flex>

            <Footer />
        </Flex>
    )
}