const path = require('path');
const { config } = require('../config');

const MIGRATION_DIR = path.resolve(__dirname, 'migrations');
const MIGRATION_TABLE_NAME = 'migrations';

module.exports = {
  development: {
    client: 'postgresql',
    connection: config.database,
    migrations: {
      tableName: MIGRATION_TABLE_NAME,
      directory: MIGRATION_DIR,
    },
  },
  testing: {
    client: 'postgresql',
    connection: config.database,
    migrations: {
      tableName: MIGRATION_TABLE_NAME,
      directory: MIGRATION_DIR,
    },
  },
  production: {
    client: 'postgresql',
    connection: config.database,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: MIGRATION_TABLE_NAME,
      directory: MIGRATION_DIR,
    },
  },
};
