const knex = require('./index');

const getPendingMigrations = async () => {
  const [, pendingMigrations] = await knex.migrate.list();
  console.log(JSON.stringify(pendingMigrations));
  return pendingMigrations;
};

const runPendingMigrations = () => knex.migrate.latest();

const checkMigrations = async () => {
  const pendingMigrations = await getPendingMigrations().catch((error) => console.error(error));
  if (pendingMigrations.length) {
    console.info(`Pending migrations: ${JSON.stringify(pendingMigrations)}`);
    await runPendingMigrations();
    console.info('Migrations were completed!');
  }
  console.info('No migrations to run!');
  return Promise.resolve();
};

module.exports = { checkMigrations };
