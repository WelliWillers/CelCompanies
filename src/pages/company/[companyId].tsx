import { Flex, Heading, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CardBox } from "../../components/Layout/CardBox";
import CommunsParts from "../../components/Layout/CommunsParts"

interface CompanyProps {
    id: number;
    name: string;
    vatin: string;
}

interface NumbersProps {
    id: number;
    type: string;
    company_id: number;
}

export default function Company(){

    const router = useRouter()
    const [ selectedCompany, setSelectedCompany ] = useState<CompanyProps>({
        id: 0,
        name: '',
        vatin: ''
    })
    const [ numbers, setNumbers ] = useState<NumbersProps[]>([])
    const { companyId } = router.query

    async function loadCompanies() {
        axios.get('/companies')
            .then((response) => {
                const dados = response.data
                var filtered = dados.filter((company) => {
                    return company.id == companyId
                })                

                setSelectedCompany(filtered[0])

            })
            .catch(function (error) {
                toast.error('Company not found!');
            })
    }

    async function loadNumbersOfCompany() {
        axios.get('/phone_numbers')
            .then((response) => {
                const dados = response.data
                var numbersFound = dados.filter((phoneNumbers) => {
                    return phoneNumbers.company_id == companyId
                })                

                setNumbers(numbersFound)

            })
            .catch(function (error) {
                toast.error('Numbers not found!');
            })
    }

    useEffect(() => {
        loadCompanies();
        loadNumbersOfCompany();
    }, []);


    return (
        <CommunsParts title={`Company ${selectedCompany.name && selectedCompany.name}`} subtitle={`Company vatin ${selectedCompany.vatin && selectedCompany.vatin}`}>
            <SimpleGrid width="100%" columns={{base: 1, md: 2, lg: 3}} spacing={8}>
            {
                numbers.length ? numbers.map((number) => {
                    return (
                        <CardBox key={number.id} title={number.id.toString()} router="number" subtitle={number.type.toLocaleUpperCase()} id={number.id} />
                    )
                }) : (<Text textAlign={{base: "center", md: "left"}} fontSize="md">No numbers found</Text>)
            }
            </SimpleGrid>
        </CommunsParts>
    )
} 