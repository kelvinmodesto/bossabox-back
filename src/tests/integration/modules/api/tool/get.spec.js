/* eslint-disable no-underscore-dangle */
import { describe } from 'mocha';
import { expect } from 'chai';
import request from 'supertest';

import app from '../../../../../../app';

const MOCK_TOOL = {
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

describe('API GET Test Suit', () => {
  it('list all tools', async () => {
    request(app)
      .get('/tools')
      .end((err, res) => {
        expect(res.body).to.be.a('array');
        expect(res.status).to.be.deep.equal(200);
      });
  });
  it('list tools filtering by a title property', async () => {
    request(app)
      .get(`/tools?title=${MOCK_TOOL.title}`)
      .end((err, res) => {
        expect(res.body).to.be.a('array');
        expect(res.status).to.be.deep.equal(200);
      });
  });
  it('list tools filtering by a link property', async () => {
    request(app)
      .get(`/tools?link=${MOCK_TOOL.link}`)
      .end((err, res) => {
        expect(res.body).to.be.a('array');
        expect(res.status).to.be.deep.equal(200);
      });
  });
  it('list tools filtering by a description property', async () => {
    request(app)
      .get(`/tools?description=${MOCK_TOOL.description}`)
      .end((err, res) => {
        expect(res.body).to.be.a('array');
        expect(res.status).to.be.deep.equal(200);
      });
  });
  it('list tools filtering by a item in tags list', async () => {
    request(app)
      .get(`/tools?tags=${MOCK_TOOL.tags[0]}`)
      .end((err, res) => {
        expect(res.body).to.be.a('array');
        expect(res.status).to.be.deep.equal(200);
      });
  });
});
