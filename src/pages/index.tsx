import { Box, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CardBox } from "../components/Layout/CardBox";
import CommunsParts from "../components/Layout/CommunsParts";
import { useSearch } from "../contexts/SearchContext";

interface CompanyProps {
  id: number;
  name: string;
  vatin: string;
}

export default function Home() {

  const [ companies, setCompanies ] = useState<CompanyProps[]>([])
  const { search } = useSearch()

  async function loadCompanies() {
    await axios.get('/companies')
      .then((response) => {
        if(search.length >= 3){
          const responseFiltered = response.data.filter((company) => {
            return company.name.toLowerCase().includes(search.toLowerCase());
          })
          setCompanies(responseFiltered)
        } else {
          setCompanies(response.data)
        }
      })
      .catch(function (error) {
        toast.error('Companies not found!');
      })
  }

  useEffect(() => {
    loadCompanies();
  }, [search.length >= 3 && search]);

  return (
    <CommunsParts title="Companies list" subtitle="Click on a company to see more about it.">
      <SimpleGrid width="100%" columns={{base: 1, md: 2, lg: 3}} spacing={8}>
        {
          companies.length ?
          companies.map((company) => {
            return (
              <CardBox height="280px" key={company.id} title={company.name.toString()} router="company" subtitle={'Vatin: ' + company.vatin.toLocaleUpperCase()} id={company.id} />
            )
          }) : (
            <Text textAlign={{base: "center", md: "left"}} fontSize="md">No companies found</Text>
          )
        }
      </SimpleGrid>
    </CommunsParts>
  )
}
