const logger = require('../logger');

const DEFAULT_STATUS = 500;
const DEFAULT_MESSAGE = 'There was an error';
const DEFAULT_INTERNAL_CODE = 'internal_error';

exports.errorsHandler = (error, req, res) => {
  const status = error?.status || DEFAULT_STATUS;
  const message = error?.message || DEFAULT_MESSAGE;
  const internalCode = error?.internalCode || DEFAULT_INTERNAL_CODE;

  const errorResponse = {
    internalCode,
    message,
  };
  logger.error(JSON.stringify(errorResponse));

  res.status(status).send(errorResponse);
};
