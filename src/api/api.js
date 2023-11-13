const express = require('express');
const { Pool } = require('pg');
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Content-Type', 'application/json');
  next();
});

// Configuração de conexão com o banco de dados
const pool = new Pool({
  user: '',
  host: '',
  database: '',
  password: '',
  port: 5432,
  ssl: {
    rejectUnauthorized: false, // Opção para evitar o erro relacionado ao certificado
  },
  sslmode: 'require', // Indica que a conexão deve ser feita usando SSL
});

pool.connect()
  .then(() => {
    console.log('Conexão ao banco de dados bem-sucedida');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

app.get('/validator/:id', async (req, res) => {
  const userId = req.params.id;
  const query = 'SELECT * FROM alunos WHERE id = $1';

  try {
    const { rows } = await pool.query(query, [userId]);

    if (rows.length > 0) {
      res.json(rows[0]); // Retorna o aluno encontrado
    } else {
      res.status(404).json({ error: 'Aluno não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao buscar dados no banco de dados:', error);
    res.status(500).json({ error: 'Erro ao buscar dados no banco de dados' });
  }
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`API está rodando na porta ${PORT}`);
});
