exports.up = async (knex) => {
  await knex.schema
    .createTable('tasks', (table) => {
      table.uuid('id').primary();
      table.text('title').notNullable();
    });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('tasks');
};
