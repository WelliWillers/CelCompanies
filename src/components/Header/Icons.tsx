import { HStack, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { RiFacebookBoxLine, RiInstagramLine } from "react-icons/ri";

export function Icons() {
    return (
        <HStack 
            spacing={["6", "8"]}
            mx={["6", "8"]}
            pr={["6", "8"]}
            py="1"
            color="gray.300"
        >
            <Link target="_blank" href="#0">
                <Icon cursor="pointer" color="gray.200" as={RiFacebookBoxLine} fontSize="20"/>
            </Link>
            <Link target="_blank" href="#0">
                <Icon cursor="pointer" color="gray.200" as={RiInstagramLine} fontSize="20"/>
            </Link>
        </HStack>
    )
}