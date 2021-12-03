const { logger } = require('../logger');
const tasksService = require('../services/tasks');
const loremFakerService = require('../services/tasks');

const DEFAULT_QUANTITY = 3;

exports.getTasks = async (req, res, next) => {
  logger.info('getTask controller start');
  try {
    const response = await tasksService.getTasks();

    return res.send(response);
  } catch (error) {
    return next(error);
  }
};

exports.postTasks = async (req, res, next) => {
  logger.info('postTask controller start');
  try {
    const quantity = req.query?.quantity || DEFAULT_QUANTITY;

    const response = await loremFakerService.createTasks(quantity);

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
