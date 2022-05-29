import { Heading, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { RiPhoneLine, RiSmartphoneLine } from "react-icons/ri";
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

    useEffect(() => {
        const { companyId } = router.query
        async function loadCompany() {
            await axios.get(`/companies/${companyId}`)
                .then((response) => {
                    const data = response.data
                    setSelectedCompany(data)
                })
                .catch( (error) => {
                    toast.warning('Searching numbers from company...')
                })
        }
        
        async function loadNumbersOfCompany() {
            await axios.get(`/phone_numbers?company_id=${companyId}`)
                .then((response) => {
                    const data = response.data
                    setNumbers(data)
                })
                .catch((error) => {
                    toast.error('Numbers not found!')
                })
        }

        loadCompany();
        loadNumbersOfCompany();
        
    }, [companyId != undefined && companyId]);


    return (
        <CommunsParts title={selectedCompany.name && selectedCompany.name} subtitle={`Company vatin ${selectedCompany.vatin && selectedCompany.vatin}`}>
            <SimpleGrid width="100%" columns={{base: 1, md: 2, lg: 3}} spacing={8}>
            {
                numbers.length ? numbers.map((number) => {
                    return (
                        <CardBox key={number.id} router={`/number/${number.id}`}>
                            <Icon color="primary.normal" as={number.type == "mobile" ? RiSmartphoneLine : RiPhoneLine} fontSize="50"/>
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