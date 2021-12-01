const axios = require('axios').default;
const { createTasks } = require('../repositories/tasks');

const parseTasksForDb = (tasks = []) => tasks.map((task) => ({ title: task }));

exports.getSentences = async (quantity) => {
  try {
    // TODO: config this link
    const response = await axios.get(`https://lorem-faker.vercel.app/api?quantity=${quantity}`);
    // TODO: persist data
    const mapedTasks = parseTasksForDb(response?.data);
    return createTasks(mapedTasks);
  } catch (error) {
    console.error(error.message);
    return [];
  }
};
