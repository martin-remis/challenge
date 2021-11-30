const { Router } = require('express');
const { getTasks, putTasks } = require('./controllers/tasks');

const router = Router();

router.get('/tasks', getTasks);

router.put('/tasks', putTasks);

exports.router = router;
