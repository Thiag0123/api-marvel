const database = require('../database/knex');

const FilmeModel = {
  async criar(filme) {
    return await database('filmes').insert(filme);
  },

  async listar(filtros) {
    const { fase, ordenar, page = 1, limit = 5 } = filtros;

    let query = database('filmes');

    if (fase) {
      query = query.where('fase', fase);
    }

    if (ordenar) {
      query = query.orderBy(ordenar, 'asc');
    }

    const offset = (page - 1) * limit;

    return await query.limit(limit).offset(offset);
  },

  // 👇 COLE AQUI
  async buscarPorId(id) {
    return await database('filmes').where({ id }).first();
  },

  async atualizar(id, dados) {
    return await database('filmes').where({ id }).update(dados);
  },

  async deletar(id) {
    return await database('filmes').where({ id }).del();
  }
};

module.exports = FilmeModel;