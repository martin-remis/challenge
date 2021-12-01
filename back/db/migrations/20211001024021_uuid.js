exports.up = async (knex) => {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";ALTER EXTENSION "uuid-ossp" SET SCHEMA public;');
};

exports.down = async (knex) => {
  await knex.raw('DROP EXTENSION IF EXISTS "uuid-ossp";');
};
