const { describe } = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../../../../../app');

const { expect } = chai;

chai.use(chaiHttp);

describe('API GET Test Suit', function init() {
  this.beforeAll(async () => {
  });
  /*
  * TODO: Fix get tool test case
  * */
  it('list tools', async () => {
    chai.request(app)
      .get('/tools')
      .end((err, res) => {
        expect([res.body]).to.be.a('array');
        expect(res.status).to.be.deep.equal(200);
      });
  });
});
