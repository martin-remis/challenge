const axios = require('axios').default;
const { getTasks, createTasks } = require('../repositories/tasks');
const { logger } = require('../logger');
const { config } = require('../../config');

const parseTasksForDb = (tasks = []) => tasks.map((task) => ({ title: task }));

exports.createTasks = async (requestedQuantity) => {
  try {
    const quantity = requestedQuantity || config.loremFaker.defaultQuantity;
    const response = await axios.get(`${config.loremFaker.apiUrl}?quantity=${quantity}`);
    const mapedTasks = parseTasksForDb(response?.data);

    return createTasks(mapedTasks);
  } catch (error) {
    logger.error(error.message);
    return [];
  }
};

exports.getTasks = async () => {
  try {
    return getTasks();
  } catch (error) {
    logger.error(error.message);
    return [];
  }
};
