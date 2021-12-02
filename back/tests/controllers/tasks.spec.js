const request = require('supertest');

const knex = require('../../db');
const app = require('../../app');
const { truncateAllTables } = require('../helpers');
const { mockGetRequest } = require('../mocks/lorem-faker-mock');

describe('Tasks integration tests', () => {
  beforeEach(async () => {
    await truncateAllTables();
  });

  describe('get tasks test', () => {
    test('Response with N elements', async () => {
      mockGetRequest('https://lorem-faker.vercel.app', '/api?quantity=4', ['asd', 'qwe', 'poiu', 'zxc']);

      const response = await request(app).get('/tasks?quantity=4');

      const persistedTasks = await knex('tasks').select('*');

      expect(response.body.length).toBe(4);
      expect(persistedTasks.length).toBe(4);
    });
    test('Response with default elements', async () => {
      mockGetRequest('https://lorem-faker.vercel.app', '/api?quantity=3', ['asd', 'qwe', 'poiu']);

      const response = await request(app).get('/tasks');

      const persistedTasks = await knex('tasks').select('*');

      expect(response.body.length).toBe(3);
      expect(persistedTasks.length).toBe(3);
    });
  });

  describe('put tasks test', () => {
    test('Do nothing', async () => {
      const response = await request(app)
        .put('/tasks')
        .send({ id: '398a39bb-da12-4cf8-beb3-085d6fb86ea9', title: 'title' });

      expect(response.status).toEqual(204);
    });
    test('Fails because of wrong schema', async () => {
      const response = await request(app)
        .put('/tasks')
        .send({ title: 'title' });

      expect(response.status).toEqual(400);
    });
  });
});
