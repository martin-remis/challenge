const { logger } = require('../logger');

exports.schemaValidator = (validateSchema) => async (req, res, next) => {
  try {
    await validateSchema(req.body);
    logger.info('Request succesfully validated');
    return next();
  } catch (error) {
    logger.info('Invalid request schema');
    return next({ status: 400, internalCode: 'validation_error' });
  }
};
