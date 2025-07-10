import livroModel from "../models/Livro.js";

class LivroController {

  static async listarLivros(req, res) {
    try {
      const listaLivros = await livroModel.find({});
      res.status(200).json(listaLivros);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha na requisição` });
    }
  }

  static async listarLivroPorId(req, res) {
    try {
      const id = req.params.id;
      const livro = await livroModel.findById(id);
      if (livro) {
        res.status(200).json(livro);
      } else {
        res.status(404).send("Livro não encontrado");
      }
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha ao buscar livro` });
    }
  }

  static async cadastrarLivros(req, res) {
    try {
      const novoLivro = await livroModel.create(req.body)
      res.status(201).json({ message: "Criado com sucesso", livro: novoLivro});
    } catch (error) {
      res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro`})
    }
  }

  static async atualizarLivro(req, res) {
    try {
      const id = req.params.id;
      await livroModel.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Livro atualizado com sucesso" });

    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha ao atualizar o livro` });
    }
  }

  static async deletarLivro(req, res) {
    try {
      const id = req.params.id;
      await livroModel.findByIdAndDelete(id);
      res.status(200).send("Livro removido com sucesso");
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha ao remover o livro` });
    }   
  }

}

export default LivroController;