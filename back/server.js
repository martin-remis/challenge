const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { router } = require('./app/router');
const { config } = require('./config');
const { checkMigrations } = require('./db/check-migrations');
const { logger } = require('./app/logger');
const { errorsHandler } = require('./app/middlewares/error-handler');

const app = express();
const { port } = config;

app.use(bodyParser.json());
app.use(cors());

app.use(router);

app.use(errorsHandler);

Promise.resolve()
  .then(() => checkMigrations())
  .then(() => app.listen(port, () => {
    logger.info(`Listening at http://localhost:${port}`);
  }));
