const express = require('express');
const mysql = require('mysql2');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Permite somente a origem http://localhost:3000
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


// Configuração de conexão com o banco de dados
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Coloque a senha do seu banco de dados aqui
  database: 'dombosco'
});

// Conecta ao banco de dados
db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão ao banco de dados bem-sucedida');
});

// Rota para obter um aluno específico do banco de dados com base no ID
app.get('/dados/:id', (req, res) => {
  const userId = req.params.id;
  const query = 'SELECT * FROM alunos WHERE id = ?';

  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error('Erro ao buscar dados no banco de dados:', err);
      res.status(500).json({ error: 'Erro ao buscar dados no banco de dados' });
      return;
    }

    if (results.length > 0) {
      res.json(results[0]); // Retorna o aluno encontrado
    } else {
      res.status(404).json({ error: 'Aluno não encontrado' });
    }
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`API está rodando na porta ${PORT}`);
});
