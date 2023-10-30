import { Flex, FormControl, FormLabel, Input, Button, Box, Heading, Text, Image, Link } from '@chakra-ui/react'
import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import api from '@/api/services'

const DownloadForm = () => {

  const [resinput, setResInput] = useState('')
  const [data, setData] = useState('')

  async function handlesearch(){
    if(resinput === ''){
      alert("Por favor preencha este campo")
      return;
    }
  
    try {
      const response = await api.get(`${resinput}`)
      setData(response.data);
      setResInput("")
    } catch {
      alert("Erro ao buscar");
      setResInput("")
    }
  }


  return (
    <>
      <Flex 
      justifyContent={'center'}
      flexDir={'column'}
      alignItems={'center'}
      w={'100%'} 
      h={'90vh'} 
      bg={'#053057'}
      >
          <FormControl as={'fieldset'} maxW={'428px'} color={'#fff'} py={8} >
              <FormLabel as={'legend'}>
                  *Digite seu código para ter acesso ao pdf do seu diploma
              </FormLabel>
              <Flex gap={4}>
                <Input 
                type='text' 
                placeholder='Digite o código'
                value={resinput}
                onChange={((e) => setResInput(e.target.value))}
                 />
                <Button onClick={handlesearch}>Enviar</Button>
              </Flex>
          </FormControl>
          {Object.keys(data).length > 0 && (
            <>
              <Flex 
              flexDirection={'column'} 
              color={'#fff'} 
              gap={4} 
              textAlign={'center'} 
              borderRadius={8}
              py={4}
              bg={'#0C5164'}>
                <Heading fontSize={'xl'}>Diploma Solicitado</Heading>
                <Flex flexDir={'column'} gap={4} marginTop={4}>
                  <Box margin={'0 auto'}>
                    <Image src={data.foto} alt='image' w={'120px'} h={'150px'} />
                  </Box>
                  <Text as={'span'}>Nome: {data.name}</Text>
                  <Text as={'span'}>CPF: {data.cpf}</Text>
                  <Text as={'span'}>RG: {data.rg}</Text>
                  <Link href={data.href} download={data.filename}>Baixar diploma</Link>
                </Flex>
              </Flex>
            </>
          )}
      </Flex>
    </>
  )
}

export async function getServerSideProps({ params }) {
  // Obtenha o ID do usuário a partir dos parâmetros da URL
  const userId = params.id;

  // Procure o usuário com base no ID na fonte de dados (arquivo JSON)
  return {
    props: { user },
  };
}

export default DownloadForm