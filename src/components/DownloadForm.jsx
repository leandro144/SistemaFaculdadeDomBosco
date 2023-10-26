import { Flex, FormControl, FormLabel, Input, Button, Box, Heading, Text, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
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
      h={'76.8vh'} 
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
              <Flex flexDirection={'column'} color={'#fff'} gap={4} textAlign={'center'}>
                <Heading>Diploma Solicitado</Heading>
                <Text as={'span'}>Nome: {data.name}</Text>
                <Text as={'span'}>CPF: {data.Title}</Text>
                <Text as={'span'}>RG: {data.price}</Text>
              </Flex>
            </>
          )}
      </Flex>
    </>
  )
}

export default DownloadForm