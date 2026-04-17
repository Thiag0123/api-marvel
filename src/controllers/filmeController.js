const FilmeModel = require('../models/filmeModel');

const FilmeController = {
  async criar(req, res) {
    try {
      const { titulo, personagem_principal, ano_lancamento, fase } = req.body;

      if (!titulo || !personagem_principal || !ano_lancamento || !fase) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
      }

      await FilmeModel.criar({
        titulo,
        personagem_principal,
        ano_lancamento,
        fase
      });

      return res.status(201).json({ message: 'Filme criado com sucesso!' });

    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar filme' });
    }
  },

  async listar(req, res) {
    try {
      const filtros = req.query;
      const filmes = await FilmeModel.listar(filtros);

      return res.status(200).json(filmes);

    } catch (error) {
      return res.status(500).json({ error: 'Erro ao listar filmes' });
    }
  },

  // 👇 ADICIONA AQUI

  async buscarPorId(req, res) {
    try {
      const { id } = req.params;

      const filme = await FilmeModel.buscarPorId(id);

      if (!filme) {
        return res.status(404).json({ error: 'Filme não encontrado' });
      }

      return res.status(200).json(filme);

    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar filme' });
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const dados = req.body;

      const filme = await FilmeModel.buscarPorId(id);

      if (!filme) {
        return res.status(404).json({ error: 'Filme não encontrado' });
      }

      await FilmeModel.atualizar(id, dados);

      return res.status(200).json({ message: 'Filme atualizado com sucesso' });

    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar filme' });
    }
  },

  async deletar(req, res) {
    try {
      const { id } = req.params;

      const filme = await FilmeModel.buscarPorId(id);

      if (!filme) {
        return res.status(404).json({ error: 'Filme não encontrado' });
      }

      await FilmeModel.deletar(id);

      return res.status(200).json({ message: 'Filme deletado com sucesso' });

    } catch (error) {
      return res.status(500).json({ error: 'Erro ao deletar filme' });
    }
  }
};

module.exports = FilmeController;