// pages/api-data/[id].js

import Header from "@/components/Header";
import { Box, Link, Text, Flex, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function ApiData() {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState({});


  useEffect(() => {
    fetch(`https://sistema-faculdade-dom-bosco.vercel.app//validator/${id}`)
    .then((response) => {
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    return response.json();
    })
    .then((data) => setData(data))
    .catch((error) => {
      console.error("Erro ao buscar dados:", error);
  });

  }, [id]);



  return (
    <>
    <Header />

      <Flex justify={'center'} py='2rem'>
        <Image w={'280px'} h={'80px'} src="https://faculdadesdombosco.com.br/site/wp-content/uploads/2021/07/logo-top-2.png" alt="logo" />
      </Flex>
      <Text fontWeight={'700'} fontSize="1rem" color={'#808080'} textAlign='center'>Validador de Diploma Digital e Historico Escolar</Text>
      <Box w={'100%'} maxW={'1024px'} margin={'0 auto'} py={'1rem'} >
        <Flex color={'#656565'} fontWeight={700} gap='5px'>Código validação consultado:<Text fontWeight={'normal'}> {id}</Text></Flex>
        <Flex color={'#656565'} fontWeight={700} gap='5px'>Status do diploma:<Text fontWeight={'normal'}> Válido</Text></Flex>
        <Flex color={'#656565'} fontWeight={700} gap='5px'>Nome:<Text fontWeight={'normal'}> {data.nome}</Text></Flex>
      </Box>
      
      <Box  py={'1rem'}>
        <Box w="75%" mx="auto" h="1px" bg="black" />
      </Box>
      
      <Box w={'100%'} maxW={'1024px'} margin={'0 auto'}>
        <Text fontSize={'1.5rem'} color={'#808080'} >Downloads</Text>
        <Flex flexDir={'column'} color={'#1B72E2'}>
          <Link href={data.xml_data} download={'xml-diplomq'}>diploma original assinado (XML)</Link>
          <Link href={data.pdf} download={data.file_name}>RVDD (Representação visual - PDF)</Link>
        </Flex>
      </Box>

      <Box  py={'1rem'}>
        <Box w="75%" mx="auto" h="1px" bg="black" />
      </Box>

      <Box w={'100%'} maxW={'1024px'} margin={'0 auto'}>
        <Text fontSize={'1.5rem'} color={'#808080'} >Validações:</Text>
        <Flex flexDir={'column'} color={'#1B72E2'}>
          <Link href="https://validadordiplomadigital.mec.gov.br/diploma" download={'xml-diploma'}>Clique aqui e acesse o Verificador de conformidade de diplomas do MEC</Link>
          <Link href="https://verificador.iti.gov.br/" download={"pdf-diploma"}>Clique aqui para acessar o Verificador de conformidade do ITI (assinaturas)</Link>
        </Flex>
      </Box>
    </>
  );
}

export default ApiData;
