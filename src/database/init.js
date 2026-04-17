const database = require('./knex');

async function createTables() {
  await database.schema.hasTable('filmes').then(async (exists) => {
    if (!exists) {
      await database.schema.createTable('filmes', (table) => {
        table.increments('id').primary();
        table.string('titulo').notNullable();
        table.string('personagem_principal').notNullable();
        table.integer('ano_lancamento').notNullable();
        table.string('fase').notNullable();
      });

      console.log('Tabela filmes criada com sucesso!');
    }
  });
}

module.exports = createTables;