/* eslint-disable no-underscore-dangle */
import { describe } from 'mocha';
import { expect } from 'chai';
import request from 'supertest';

import app from '../../../../../../app';

describe('API GET Test Suit', () => {
  it('list tools', async () => {
    request(app)
      .get('/tools')
      .end((err, res) => {
        expect(res.body).to.be.a('array');
        expect(res.status).to.be.deep.equal(200);
      });
  });
});
