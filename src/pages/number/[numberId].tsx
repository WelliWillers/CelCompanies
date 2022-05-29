import { Button, Icon } from "@chakra-ui/react";
import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { RiPhoneLine } from "react-icons/ri";
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
            <CardBox key={selectedNumber.id} height="280px" icon={<Icon color="primary.normal" as={RiPhoneLine} fontSize="50" mb="3" />} title={selectedNumber.id.toString()} router="number" subtitle={selectedNumber.type} id={selectedNumber.id} >
                <Button mt="5" colorScheme='blue' size="lg">Ligar</Button>
            </CardBox>
        </CommunsParts>
    )
} 