-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 08-Nov-2023 às 17:18
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `dombosco`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `alunos`
--

CREATE TABLE `alunos` (
  `id` varchar(255) NOT NULL,
  `nome` varchar(45) NOT NULL,
  `rg` varchar(45) NOT NULL,
  `xml_data` longtext DEFAULT NULL,
  `pdf` varchar(255) DEFAULT NULL,
  `id_token` varchar(45) NOT NULL,
  `file_name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `alunos`
--

INSERT INTO `alunos` (`id`, `nome`, `rg`, `xml_data`, `pdf`, `id_token`, `file_name`) VALUES
('19853.665.6130b48070e2', 'Maycon Amancio De Souza', '13.419.955-5', '../../../assets/xmls/maycon.xml', '../../../assets/diplomas/maycon.pdf', '19853.665.6130b48070e2', 'maycon.pdf'),
('19853.665.70bd2c68431f', 'Lucas Da Silva Arvelino', '14.172.157-7', '../../../assets/xmls/lucas.xml', '../../../assets/diplomas/lucas.pdf', '19853.665.70bd2c68431f', 'lucas.pdf'),
('19853.665.778f1514939c', 'Guilherme Matheus Carmo Cassiano', '1.242.953-35', '../../../assets/xmls/guilherme-matheus.xml', '../../../assets/diplomas/guilhermematheus.pdf', '19853.665.778f1514939c', 'guilhermematheus.pdf'),
('19853.665.7dfffd7f1b0a', 'Guilherme Moggione De Assis', '40.809.256-7', '../../../assets/xmls/guilherme.xml', '../../assets/diplomas/guilhermemoggione.pdf', '19853.665.7dfffd7f1b0a', 'guilhermemoggione.pdf'),
('19853.665.dec566429fd1', 'Patricia Cardoso Dos Santos Andrade', '10.841.737-4', '../../../assets/xmls/patricia.xml', '../../../assets/diplomas/patricia.pdf', '19853.665.dec566429fd1', 'patricia.pdf'),
('19853.665.e8b44bff53dd', 'Eduarda Caroline Gomes De Carvalho', '13.772.936-9', '../../../assets/xmls/eduarda.xml', '../../../assets/diplomas/eduarda.pdf', '19853.665.e8b44bff53dd', 'eduarda.pdf'),
('19853.665.ebc848be5e34', 'Jhonathan Amancio De Souza', '13.419.945-9', '../../../assets/xmls/jhonathan.xml', '../../../assets/diplomas/jhonathan.pdf', '19853.665.ebc848be5e34', 'jhonathan.pdf');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `alunos`
--
ALTER TABLE `alunos`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
