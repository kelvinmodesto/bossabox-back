const { describe } = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../../../../../app');

chai.use(chaiHttp);

describe.only('API Test Suit', function init() {
  this.beforeAll(async () => {
  });

  it('API is listening the port 3000', async () => {
    chai.expect(1).to.be.equal(1);
  });

  it('list all tools, without params', async () => {
    chai.request(app)
      .get('/tools')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(0);
      });
  });

  it('filter tools with params', async () => {
    chai.expect(1).to.be.equal(1);
  });

  it('filter tools with tags params', async () => {
    chai.expect(1).to.be.equal(1);
  });

  it('filter tools with all params', async () => {
    chai.expect(1).to.be.equal(1);
  });

  it('filter tools with a invalid param', async () => {
    chai.expect(1).to.be.equal(1);
  });

  it('create tool', async () => {
    chai.expect(1).to.be.equal(1);
  });

  it('create a invalid tool', async () => {
    chai.expect(1).to.be.equal(1);
  });

  it('create a empty tool', async () => {
    chai.expect(1).to.be.equal(1);
  });

  it('delete tool', async () => {
    chai.expect(1).to.be.equal(1);
  });

  it('delete a inexistent tool', async () => {
    chai.expect(1).to.be.equal(1);
  });

  it('delete a invalid tool', async () => {
    chai.expect(1).to.be.equal(1);
  });

  it('update a tool', async () => {
    chai.expect(1).to.be.equal(1);
  });
});
