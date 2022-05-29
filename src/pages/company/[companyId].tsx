import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
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
    const { companyId } = router.query

    const [ selectedCompany, setSelectedCompany ] = useState<CompanyProps>({
        id: 0,
        name: '',
        vatin: ''
    })
    const [ numbers, setNumbers ] = useState<NumbersProps[]>([])

    console.log('company url id: ' + companyId)

    async function loadCompanies() {
        axios.get('/companies')
            .then((response) => {
                
                const filtered = response.data.filter((company) => {
                    return company.id == companyId
                })
                
                console.log(filtered[0])

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
    }, [companyId]);


    return (
        <CommunsParts title={`Company ${selectedCompany.name && selectedCompany.name}`} subtitle={`Company vatin ${selectedCompany.vatin && selectedCompany.vatin}`}>
            <SimpleGrid width="100%" columns={{base: 1, md: 2, lg: 3}} spacing={8}>
            {
                numbers.length ? numbers.map((number) => {
                    return (
                        <CardBox key={number.id} router={`/number/${number.id}`}>
                            <Heading fontSize="25">
                                {number.id.toString()}
                            </Heading>  
                            <Text fontSize="md" color="gray.400">Type of number:  {number.type.toLocaleUpperCase()}</Text>
                        </CardBox>
                    )
                }) : (<Text color="primary.normal" textAlign={{base: "center", md: "left"}} fontSize="md">No numbers found</Text>)
            }
            </SimpleGrid>
        </CommunsParts>
    )
} 