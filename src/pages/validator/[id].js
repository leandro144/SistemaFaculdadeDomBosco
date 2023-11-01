// pages/api-data/[id].js

import Header from "@/components/Header";
import Menu from "@/components/Menu";
import { Heading, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function ApiData() {
  const router = useRouter();
  const { id } = router.query; // Obtém o ID da URL

  const [data, setData] = useState({});

  useEffect(() => {
    // Faça uma chamada para a sua API aqui usando o ID
    fetch(`http://localhost:8080/dados/${id}`) // Substitua pela URL da sua API com o ID
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }, [id]);

  return (
    <>
    <Header />
      <Heading as="h1">Dados da API</Heading>
      <Text>ID: {id}</Text>
      <Text>Nome: {data.nome}</Text>
      <Text>CPF: {data.cpf}</Text>
      <Text>ID de Validação: {data.id_validacao}</Text>
    </>
  );
}

export default ApiData;
