const knex = require('knex');

const database = knex({
  client: 'sqlite3',
  connection: {
    filename: './src/database/marvel.sqlite'
  },
  useNullAsDefault: true
});

module.exports = database;