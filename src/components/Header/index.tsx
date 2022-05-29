import { Box, Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react"
import { Icons } from "./Icons"
import { SearchBox } from "./SearchBox"
import { Logo } from "./Logo"
import Link from "next/link"
import Router, { useRouter } from "next/router"
import { RiArrowLeftLine } from "react-icons/ri"


export function Header() {
    const { asPath,  } = useRouter()

    const showInLarge = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Flex as="header" w="100%" maxWidth={1480} h="auto" alignItems="center" mx="auto" flexDirection={{base:'column', lg:'row'}} justifyContent="space-between" mt="4" px="6" align="center">
            <Flex flexDirection="row" gap="5" alignItems="center">
                {
                    asPath != '/' && (
                        <IconButton
                            variant='outline'
                            color='primary.normal'
                            onClick={() => Router.back()}
                            aria-label='Go back'
                            fontSize='20px'
                            icon={<Icon as={RiArrowLeftLine} />}
                        />
                    )
                }

                <Logo />
            </Flex>

            {
                asPath == '/' && (
                    <SearchBox />
                )
            }

            {
                showInLarge && (
                    <Flex align="center">
                        <Icons />
                    </Flex>
                )
            }

        </Flex>
    )
}