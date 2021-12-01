const { logger } = require('../app/logger');
const knex = require('./index');

const DELAY_SECS = 5;

const getPendingMigrations = async () => {
  try {
    const [, pendingMigrations] = await knex.migrate.list();
    logger.info(JSON.stringify(pendingMigrations));
    return pendingMigrations;
  } catch (error) {
    logger.error(`Cannot connect to database, trying again in ${DELAY_SECS} seconds`);
    // eslint-disable-next-line no-promise-executor-return
    await new Promise((resolve) => setTimeout(resolve, 1000 * DELAY_SECS));
    const pendingMigrations = await getPendingMigrations();
    return pendingMigrations;
  }
};

const runPendingMigrations = () => knex.migrate.latest();

const checkMigrations = async () => {
  const pendingMigrations = await getPendingMigrations();
  if (pendingMigrations.length) {
    logger.info(`Pending migrations: ${JSON.stringify(pendingMigrations)}`);
    await runPendingMigrations();
    logger.info('Migrations were completed!');
  }
  logger.info('No migrations to run!');
  return Promise.resolve();
};

module.exports = { checkMigrations };
