import express from 'express';
import autorController from '../controllers/autorController.js';

const router = express.Router();

router.get('/autores', autorController.listarAutores);
router.get('/autores/:id', autorController.listarAutorPorId)
router.post('/autores', autorController.cadastrarAutores);
router.put('/autores/:id', autorController.atualizarAutores);
router.delete('/autores/:id', autorController.deletarAutor);


export default router;