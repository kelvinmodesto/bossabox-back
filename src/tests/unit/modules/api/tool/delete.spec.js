const { describe } = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../../../../../../app');

const Context = require('../../../../../db/strategies/base/contextStrategy');
const MongoDB = require('../../../../../db/strategies/mongodb/mongoDBStrategy');
const { Tool } = require('../../../../../models/tool');

const { expect } = chai;

const MOCK_DELETE_TOOL = {
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

let MOCK_TOOL_ID = '';
let context = {};
describe('API DELETE Test Suit', function init() {
  this.beforeAll(async () => {

  });
  it('delete tool', async () => {
    chai.expect(1).to.be.equal(1);
  });
});
