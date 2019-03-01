/* eslint-disable no-underscore-dangle */
import { describe } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../../../../app';

const { expect } = chai;

chai.use(chaiHttp);

describe('API GET Test Suit', function init() {
  it('list tools', async () => {
    chai.request(app)
      .get('/tools')
      .end((err, res) => {
        expect(res.body).to.be.a('array');
        expect(res.status).to.be.deep.equal(200);
      });
  });
});
