const axios = require('axios').default;
const logger = require('../logger');
const { createTasks } = require('../repositories/tasks');
const { config } = require('../../config');

const parseTasksForDb = (tasks = []) => tasks.map((task) => ({ title: task }));

exports.getSentences = async (requestedQuantity) => {
  try {
    const quantity = requestedQuantity || config.loreFaker.defaultQuantity;
    const response = await axios.get(`${config.loreFaker.apiUrl}?quantity=${quantity}`);
    const mapedTasks = parseTasksForDb(response?.data);

    return createTasks(mapedTasks);
  } catch (error) {
    logger.error(error.message);
    return [];
  }
};
