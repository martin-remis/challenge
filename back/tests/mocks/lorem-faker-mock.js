// eslint-disable-next-line import/no-extraneous-dependencies
const nock = require('nock');

exports.mockGetRequest = (url, path, response) => nock(url)
  .get(path)
  .reply(200, response);
