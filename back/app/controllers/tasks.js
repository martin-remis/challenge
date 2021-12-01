const { logger } = require('../logger');
const loremFakerService = require('../services/lorem-faker');

const DEFAULT_QUANTITY = 3;

exports.getTasks = async (req, res, next) => {
  logger.info('getTask controller start');
  try {
    const quantity = req.query?.quantity || DEFAULT_QUANTITY;

    const response = await loremFakerService.getSentences(quantity);

    return res.send(response);
  } catch (error) {
    return next(error);
  }
};

exports.putTasks = (req, res, next) => {
  logger.info('putTask controller start');
  try {
    logger.info(`Task with ID ${req.body?.id} is done!`);
    return res.sendStatus(204);
  } catch (error) {
    return next(error);
  }
};
