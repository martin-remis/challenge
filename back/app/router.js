const { Router } = require('express');
const { getTasks, putTasks } = require('./controllers/tasks');
const { schemaValidator } = require('./middlewares/validator');
const { putTasksValidator } = require('./schemas/task-schemas');

const router = Router();

router.get('/tasks', getTasks);

router.put('/tasks', schemaValidator(putTasksValidator), putTasks);

exports.router = router;
