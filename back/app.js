const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { router } = require('./app/router');
const { errorsHandler } = require('./app/middlewares/error-handler');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(router);

app.use(errorsHandler);

module.exports = app;
