const express = require('express');
const app = express();

// Rota 1: Página inicial
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Rota 1</title>
      </head>
      <body>
        <h1>Rota 1</h1>
        <p>Esta é a rota principal</p>
      </body>
    </html>
  `);
});

// Rota 2: Página sobre
app.get('/sobre', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Rota 2</title>
      </head>
      <body>
        <h1>Rota 2</h1>
        <p>Esta é a rota sobre</p>
      </body>
    </html>
  `);
});

// Rota 3: Página contato
app.get('/contato', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Rota 3</title>
      </head>
      <body>
        <h1>Rota 3</h1>
        <p>Esta é a rota contatos.</p>
      </body>
    </html>
  `);
});

// Inicia o servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
