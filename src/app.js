import express from 'express';
import conectaNaDatabase from './config/dbConnect.js';
import routes from './routes/index.js';

const conexao = await conectaNaDatabase();

conexao.on('error', console.error.bind(console, 'Erro de conexão:'));
conexao.once('open', () => {
  console.log('Conexão com o banco de dados estabelecida com sucesso');
});

const app = express();
routes(app);


export default app;

