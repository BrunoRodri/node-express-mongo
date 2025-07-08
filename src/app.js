import express from 'express';
import conectaNaDatabase from './config/dbConnect.js';
import livroModel from './models/Livro.js';

const conexao = await conectaNaDatabase();

conexao.on('error', console.error.bind(console, 'Erro de conexão:'));
conexao.once('open', () => {
  console.log('Conexão com o banco de dados estabelecida com sucesso');
});

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
  res.status(200).send('Curso de Nodes.js');
});

app.get('/livros', async (req, res) => {
  const listaLivros = await livroModel.find({});
  res.status(200).json(listaLivros);
});

app.get('/livros/:id', (req, res) => {
  const index = buscaLivro(req.params.id);
  if (index !== -1) {
    res.status(200).json(livros[index]);
  } else {
    res.status(404).send("Livro não encontrado");
  }
});

app.post('/livros', (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro adicionado com sucesso");
});

app.put('/livros/:id', (req, res) => {
  const index = buscaLivro(req.params.id);
  if (index !== -1) {
    livros[index].titulo = req.body.titulo;
    
    res.status(200).send("Livro atualizado com sucesso");
  } else {
    res.status(404).send("Livro não encontrado");
  }
});

app.delete('/livros/:id', (req, res) => {
  const index = buscaLivro(req.params.id);
  if (index !== -1) {
    livros.splice(index, 1);
    res.status(200).send("Livro removido com sucesso");
  } else {
    res.status(404).send("Livro não encontrado");
  }
});

export default app;

