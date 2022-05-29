import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { ReactElement, ReactNode } from "react";

interface CardBoxProps {
    router: string
    title: string
    subtitle: string
    id: number
    height?: string
    icon?: ReactElement
    children?: ReactNode
}

export function CardBox({children, id, title, subtitle, icon, height = "180px", router}:CardBoxProps){
    return (
        <Link href={`/${router}/${id}`} passHref>
            <Flex
                cursor="pointer"
                bg="white"
                color="gray.900"
                minHeight={height}
                borderRadius={30}
                boxShadow="md"
                align="center"
                padding={5}
                textAlign="center"
                justify="center"
                flexDir="column"
                transition="border 300ms"
                _hover={{
                    border: "5px solid",
                    borderColor:"primary.normal"
                }}
            >
                {
                    icon && (
                        icon
                    )
                }
                <Heading fontSize="25">
                    {title}
                </Heading>  
                <Text fontSize="md" color="gray.400">{subtitle.toLocaleUpperCase()}</Text>
                {children}
            </Flex>
        </Link>
    )
}