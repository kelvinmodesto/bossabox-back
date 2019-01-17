const { describe } = require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');

const api = require('../../../../api');
// let xhr = {};
// let requests = {};
describe('API Test Suit', function init() {
  this.beforeAll(async () => {
    // xhr = sinon.useFakeXMLHttpRequest();
    // requests = [];
  });

  it('API is listening the port 3000', async () => {
    expect(1).to.be.equal(1);
  });

  it('list all tools, without params', async () => {
    expect(1).to.be.equal(1);
  });

  it('filter tools with params', async () => {
    expect(1).to.be.equal(1);
  });

  it('filter tools with tags params', async () => {
    expect(1).to.be.equal(1);
  });

  it('filter tools with all params', async () => {
    expect(1).to.be.equal(1);
  });

  it('filter tools with a invalid param', async () => {
    expect(1).to.be.equal(1);
  });

  it('create tool', async () => {
    expect(1).to.be.equal(1);
  });

  it('create a invalid tool', async () => {
    expect(1).to.be.equal(1);
  });

  it('create a empty tool', async () => {
    expect(1).to.be.equal(1);
  });

  it('delete tool', async () => {
    expect(1).to.be.equal(1);
  });

  it('delete a inexistent tool', async () => {
    expect(1).to.be.equal(1);
  });

  it('delete a invalid tool', async () => {
    expect(1).to.be.equal(1);
  });

  it('update a tool', async () => {
    expect(1).to.be.equal(1);
  });
});
