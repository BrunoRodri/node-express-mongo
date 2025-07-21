import mongoose from 'mongoose';
import { autorSchema } from './Autor.js'; // Importando o modelo de Autor

const livroSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId
  },
  titulo: {
    type: String,
    required: true,
  },
  editora: {
    type: String,
  },
  preco: {
    type: Number,
  },
  nro_paginas: {
    type: Number,
  },
  autor: {
    type: autorSchema, // Referência ao esquema de Autor
    required: true,
  },
}, { versionKey: false });

const livroModel = mongoose.model('livros', livroSchema);

export default livroModel;