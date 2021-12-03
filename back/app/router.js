const { Router } = require('express');
const { getTasks, putTasks, postTasks } = require('./controllers/tasks');
const { schemaValidator } = require('./middlewares/validator');
const { putTasksValidator } = require('./schemas/task-schemas');

const router = Router();

router.get('/tasks', getTasks);

router.post('/tasks', postTasks);

router.put('/tasks', schemaValidator(putTasksValidator), putTasks);

exports.router = router;
