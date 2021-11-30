const path = require('path');

const MIGRATION_DIR = path.resolve(__dirname, 'migrations');
const MIGRATION_TABLE_NAME = 'migrations';

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'db_challenge',
      user: 'user',
      password: 'pass',
    },
    migrations: {
      tableName: MIGRATION_TABLE_NAME,
      directory: MIGRATION_DIR,
    },
  },
  production: {
    client: 'postgresql',
    connection: {
      database: 'db_dhallenge',
      user: 'user',
      password: 'pass',
    },
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
