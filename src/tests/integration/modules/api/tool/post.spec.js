import { describe } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';

import { app } from '../../../../../../app';

const { expect } = chai;

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

chai.use(chaiHttp);

describe('API POST Test Suit', function init() {
  it('create tools', async () => {
    await chai.request(app)
      .post('/tools')
      .send(MOCK_CREATE_TOOL)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
      });
  });
});
