import { describe } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';

import { app } from '../../../../../../app';

const { expect } = chai;

chai.use(chaiHttp);

describe('API GET Test Suit', function init() {
  this.beforeAll(async () => {
  });
  /*
  * TODO: list all tools without params
  * */
  it('list tools', async () => {
    chai.request(app)
      .get('/tools')
      .end((err, res) => {
        expect(res.body).to.be.a('array');
        expect(res.status).to.be.deep.equal(200);
      });
  });
});
