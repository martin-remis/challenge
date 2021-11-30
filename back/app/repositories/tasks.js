const knex = require('../../db');

const TASKS_TABLE = 'tasks';

exports.createTasks = async (tasks) => knex(TASKS_TABLE).insert(tasks);
