import { autorModel } from "../models/Autor.js";
import mongoose from "mongoose";

class AutorController {

  static async listarAutores(req, res) {
    try {
      const listaAutores = await autorModel.find({});
      res.status(200).json(listaAutores);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha na requisição` });
    }
  }

  static async listarAutorPorId(req, res) {
    try {
      const id = req.params.id;
      const autor = await autorModel.findById(id);
      if (autor !== null) {
        res.status(200).json(autor);
      } else {
        res.status(404).send("Autor não encontrado");
      }
    } catch (error) {
      if (error instanceof mongoose.CastError) {
        return res.status(400).send("ID inválido");
      } else {
        res.status(500).json({ message: `${error.message} - falha ao buscar autor` });
      }
    }
  }

  static async cadastrarAutores(req, res) {
    try {
      const novoAutor = await autorModel.create(req.body)
      res.status(201).json({ message: "Criado com sucesso", autor: novoAutor});
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha ao cadastrar autor`})
    }
  }

  static async atualizarAutores(req, res) {
    try {
      const id = req.params.id;
      await autorModel.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Autor atualizado com sucesso" });

    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha ao atualizar o autor` });
    }
  }

  static async deletarAutor(req, res) {
    try {
      const id = req.params.id;
      await autorModel.findByIdAndDelete(id);
      res.status(200).send("Autor removido com sucesso");
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha ao remover o autor` });
    }   
  }

}

export default AutorController;