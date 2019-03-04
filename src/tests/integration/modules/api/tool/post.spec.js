import { describe } from 'mocha';
import request from 'supertest';

import app from '../../../../../../app';

const MOCK_CREATE_TOOL = {
  title: 'json-server',
  link: 'https://github.com/typicode/json-server',
  description: 'Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.',
  tags: [
    'api',
    'json',
    'schema',
    'node',
    'github',
    'rest',
  ],
};

describe('API POST Test Suit', () => {
  it('create tool', async () => {
    await request(app)
      .post('/tools')
      .send(MOCK_CREATE_TOOL)
      .expect(200);
  });
});
