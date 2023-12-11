import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import { Flex, FormControl, FormLabel, Input, Button, Text, useDisclosure } from '@chakra-ui/react';
import api from '../api/services'
import ApiModal from '@/components/ApiModal';

const Validation = () => {
    const [inputData, setInputData] = useState('');
    const [user, setUser] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleSearch = async () => {
        if (inputData === '') {
            alert("Por favor preencha este campo");
            return;
        }

        try {
            const response = await api.get(`${inputData}`);
            setUser(response.data);
            onOpen();
            setInputData('');
        } catch {
            alert("Erro ao buscar");
            setInputData('');
        }
    };

    return (
        <>
            <Header />
            <Menu />
            <Flex
                justifyContent={'center'}
                flexDir={'column'}
                alignItems={'center'}
                w={'100%'}
                h={'90vh'}
                bg={'#053057'}
            >
                <FormControl as={'fieldset'} maxW={'428px'} color={'#fff'} py={4}>
                    <FormLabel as={'legend'}>
                        <Text fontWeight={'700'} fontSize="1rem" color={'#fff'} textAlign='center'>Validador de Diploma Digital e Historico Escolar</Text>
                    </FormLabel>
                    <Flex gap={4}>
                        <Input
                            type='text'
                            placeholder='Digite o código'
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)}
                        />
                        <Button onClick={handleSearch}>Enviar</Button>
                    </Flex>
                </FormControl>

                <ApiModal isOpen={isOpen} onClose={onClose} apiData={user} />
            </Flex>
        </>
    );
}

export default Validation;
