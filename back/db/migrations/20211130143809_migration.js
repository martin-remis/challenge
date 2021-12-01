exports.up = async (knex) => {
  await knex.schema
    .createTable('tasks', (table) => {
      table.uuid('id').defaultTo(knex.raw('uuid_generate_v4 ()')).primary();
      table.text('title').notNullable();
    });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('tasks');
};
