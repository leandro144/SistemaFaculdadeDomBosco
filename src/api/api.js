const express = require('express');
const mysql = require('mysql2');
const app = express();


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Content-Type', 'application/json');
  next();
});


// Configuração de conexão com o banco de dados
const db = mysql.createConnection({
  host: 'srv796.hstgr.io',
  user: 'u336528174_root',
  password: 'hH?Mfka$25', // Coloque a senha do seu banco de dados aqui
  database: 'u336528174_diplomas'
});


db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão ao banco de dados bem-sucedida');
});

app.get('/validator/:id', (req, res) => {
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
