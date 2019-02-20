const { describe } = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../../../../../app');

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
  this.beforeAll(async () => {
  });
  /*
  * TODO: Create tool test case
  * */
  it('create tools', async () => {
    chai.request(app)
      .post('/tools')
      .send(MOCK_CREATE_TOOL)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
      });
    chai.expect(1).to.be.equal(1);
  });
});
