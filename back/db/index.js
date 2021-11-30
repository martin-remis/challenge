const knex = require('knex');
const path = require('path');

const { config } = require('../config');

const MIGRATION_DIR = path.resolve(__dirname, 'migrations');
const MIGRATION_TABLE_NAME = 'migrations';

console.log(MIGRATION_DIR);

const dbConfig = {
  client: 'pg',
  connection: config.database,
  migrations: {
    tableName: MIGRATION_TABLE_NAME,
    directory: MIGRATION_DIR,
  },
};

module.exports = knex(dbConfig);
