const Ajv = require('ajv');

const ajv = new Ajv({ allErrors: true });

const tasksSchema = {
  $async: true,
  type: 'object',
  properties: {
    id: { type: 'string' },
    title: { type: 'string' },
  },
  required: ['id', 'title'],
  additionalProperties: false,
};

exports.putTasksValidator = ajv.compile(tasksSchema);
