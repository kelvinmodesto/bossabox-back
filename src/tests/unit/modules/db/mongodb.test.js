const { assert, expect } = require('chai');

const Context = require('../../../../db/strategies/base/contextStrategy');
const MongoDB = require('../../../../db/strategies/mongodb/mongoDBStrategy');
const { Tool } = require('../../../../models/tool');

let context = {};
describe('MongoDB Test Suit', function init() {
  this.beforeAll(async () => {
    const connection = MongoDB.connect();
    context = new Context(new MongoDB(connection, Tool));
  });
  it('Verify connection', async () => {
    expect(await context.isConnected()).to.be.equal(1);
  });
});
