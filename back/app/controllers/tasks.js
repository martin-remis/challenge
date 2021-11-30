const loremFakerService = require('../services/loremFaker');

const DEFAULT_QUANTITY = 3;

exports.getTasks = async (req, res, next) => {
  console.log(JSON.stringify(req.body));
  try {
    // TODO: implement AJV or some validator
    const quantity = req.query?.quantity || DEFAULT_QUANTITY;

    const response = await loremFakerService.getSentences(quantity);

    return res.send(response);
  } catch (error) {
    return next(error);
  }
};

exports.putTasks = (req, res, next) => {
  console.log(JSON.stringify(req.body));
  try {
    return res.send(req.body);
  } catch (error) {
    return next(error);
  }
};
