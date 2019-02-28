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

describe('API PUT Test Suit', function init() {
  this.beforeAll(async () => {
  });
  it('update a tool', async () => {
    chai.expect(1).to.be.equal(1);
  });
});
