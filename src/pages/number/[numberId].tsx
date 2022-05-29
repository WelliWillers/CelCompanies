import { Button, Heading, Icon, Text } from "@chakra-ui/react";
import axios from "axios"
import Link from "next/link";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { RiArrowRightLine, RiPhoneLine, RiSmartphoneLine } from "react-icons/ri";
import { toast } from "react-toastify";
import { CardBox } from "../../components/Layout/CardBox";
import CommunsParts from "../../components/Layout/CommunsParts"

interface NumbersProps {
    id: number;
    type: string;
    company_id: number;
}

export default function Number(){

    const router = useRouter()
    const { numberId } = router.query
    const [ selectedNumber, setSelectedNumber ] = useState<NumbersProps>({
        id: 0,
        type: '',
        company_id: 0
    })

    async function loadNumbersOfCompany() {
        axios.get('/phone_numbers')
            .then((response) => {
                const dados = response.data
                var numbersFound = dados.filter((phoneNumbers) => {
                    return phoneNumbers.id == numberId
                })

                setSelectedNumber(numbersFound[0])
            })
            .catch(function (error) {
                toast.error('Numbers not found!');
            })
    }

    useEffect(() => {
        loadNumbersOfCompany();
    }, []);

    return (
        <CommunsParts title={`Number ${numberId}`} subtitle={`Type of number contact: ${selectedNumber.type && selectedNumber.type.toLocaleUpperCase()}`}>
            <CardBox key={selectedNumber.id} height="280px" >
                <Icon color="primary.normal" as={selectedNumber.type == "mobile" ? RiSmartphoneLine : RiPhoneLine} fontSize="50"/>
                <Heading fontSize="25">
                    {selectedNumber.id.toString()}
                </Heading>  
                <Text fontSize="md" color="gray.400">Type of number:  {selectedNumber.type.toLocaleUpperCase()}</Text>
                <Link passHref href={`tel:${selectedNumber.id}`}>
                    <Button variant="outline" borderColor="primary.normal" color="primary.normal"  size="lg">Call to this number <Icon ml="4" fontSize={20} as={RiArrowRightLine} /></Button>
                </Link>
            </CardBox>
        </CommunsParts>
    )
} 