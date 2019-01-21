const { describe } = require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');

const Context = require('../../../../db/strategies/base/contextStrategy');
const MongoDB = require('../../../../db/strategies/mongodb/mongoDBStrategy');
const { Tool } = require('../../../../models/tool');

const MOCK_TOOLS_CREATE = {

};

let context = {};
describe('MongoDB Test Suit', function init() {
  this.beforeAll(async () => {
    context = new Context(new MongoDB(MongoDB.connect(), Tool));
  });

  it('Verify connection', async () => {
    expect(await context.isConnected()).to.be.equal(1);
  });

  it('Create item', async () => {
    const { id, description, link, title, tags } = context.create();
    expect(1).to.be.equal(1);
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
