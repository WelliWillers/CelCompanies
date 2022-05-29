import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";
import { useSearch } from "../../contexts/SearchContext";

export function SearchBox() {

    const { handleGetSearchText } = useSearch()

    return (
        <Flex as="label" flex="1" py="4" px="8" ml="6" maxWidth={400} alignSelf="center" color="gray.200" position="relative" bg="gray.800" borderRadius="full">
            <Input px="4" mr="4" color="gray.50" variant="unstyled" onChange={(e) => handleGetSearchText(e.target.value)} placeholder="Search a company" _placeholder={{ color: 'gray.400' }} />
            <Icon as={RiSearchLine} fontSize="20" />
        </Flex>
    )
}