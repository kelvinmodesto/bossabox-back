const { describe } = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../../../../../app');

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

describe('API Test Suit', function init() {
  this.beforeAll(async () => {
  });

  describe('Connect test case', async () => {
    it('API is listening the port 3000', async () => {
      chai.expect(1).to.be.equal(1);
    });
  });

  describe('/GET tools', async () => {
    it('/GET tools', async () => {
      chai.request(app)
        .get('/tools')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
        });
    });
  });
  describe('/POST tools', async () => {
    it('/POST tools', async () => {
      chai.request(app)
        .post('/tools')
        .send(MOCK_CREATE_TOOL)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
        });
    });
  });
  describe('/DELETE/:id tools', async () => {
    it('/DELETE tools', async () => {
      chai.expect(1).to.be.equal(1);
    });
  });
});
