const app = require('./app');
const { config } = require('./config');
const { checkMigrations } = require('./db/check-migrations');
const { logger } = require('./app/logger');

const { port } = config;

Promise.resolve()
  .then(() => checkMigrations())
  .then(() => app.listen(port, () => {
    logger.info(`Listening at http://localhost:${port}`);
  }));
