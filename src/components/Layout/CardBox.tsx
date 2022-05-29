import { Button, Stack, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";

interface CardBoxProps {
    router?: string
    height?: string
    children: ReactNode
}

export function CardBox({children, height = "180px", router}:CardBoxProps){

    const CardBoxBackgroundColorTheme = useColorModeValue("gray.100", "gray.700")
    const CardBoxTextColorTheme = useColorModeValue("gray.900", "gray.50")

    return (
        <Link href={`${router}`} passHref>
            <Button
                cursor="pointer"
                bg={CardBoxBackgroundColorTheme}
                color={CardBoxTextColorTheme}
                minHeight={height}
                borderRadius={30}
                boxShadow="md"
                padding={5}       
                transition="border 200ms"
                _hover={{
                    border: "5px solid",
                    borderColor:"primary.normal"
                }}
            >
                <Stack 
                    spacing={4}
                    display="flex"
                    textAlign="center"  
                    justifyContent="center"
                    alignItems="center"
                    flexDir="column" 
                >
                   {children}
                </Stack>
            </Button>
        </Link>
    )
}