const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { router } = require('./app/router');
const { config } = require('./config');
const { checkMigrations } = require('./db/check-migrations');

const app = express();
const { port } = config;

app.use(bodyParser.json());
app.use(cors());

app.use(router);

Promise.resolve()
  .then(() => checkMigrations())
  .then(() => app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  }));
