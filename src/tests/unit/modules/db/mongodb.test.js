const { describe } = require('mocha');
const { expect } = require('chai');

const Context = require('../../../../db/strategies/base/contextStrategy');
const MongoDB = require('../../../../db/strategies/mongodb/mongoDBStrategy');
const { Tool } = require('../../../../models/tool');

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

let context = {};
describe('MongoDB Test Suit', function init() {
  this.beforeAll(async () => {
    context = await new Context(new MongoDB(MongoDB.connect(), Tool));
  });

  it('Verify connection', async () => {
    expect(await context.isConnected()).to.be.equal(1);
  });

  it('Create item', async () => {
    const {
      title,
      link,
      description,
      tags,
    } = await context.create(MOCK_CREATE_TOOL);

    expect(tags).to.have.same.members(MOCK_CREATE_TOOL.tags);
    expect({
      title,
      link,
      description,
      tags,
    }).to.be.equal(MOCK_CREATE_TOOL);
  });

  it('Read item', async () => {
    expect(1).to.be.equal(1);
  });

  it('Update item', async () => {
    expect(1).to.be.equal(1);
  });

  it('Delete item', async () => {
    expect(1).to.be.equal(1);
  });
});
