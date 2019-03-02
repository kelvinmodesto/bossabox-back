/* eslint-disable no-underscore-dangle */
import { describe } from 'mocha';
import chai from 'chai';
import request from 'supertest';

import app from '../../../../../../app';

import Context from '../../../../../db/strategies/base/contextStrategy';
import MongoDB from '../../../../../db/strategies/mongodb/mongoDBStrategy';
import Tool from '../../../../../models/tool';

const { expect } = chai;

const MOCK_DELETE_TOOL = {
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

let MOCK_TOOL_ID = '';
let context = {};
describe('API DELETE Test Suit', function init() {
  this.beforeAll(async () => {
    context = await new Context(new MongoDB(MongoDB.connect(), Tool));
    const tool = await context.create(MOCK_DELETE_TOOL);
    MOCK_TOOL_ID = tool._id;
  });
  it('delete tool by id', async () => {
    request(app)
      .del(`/tools/${MOCK_TOOL_ID}`)
      .end((err, res) => {
        expect(res.body).to.be.a('object');
        expect(res.status).to.be.deep.equal(200);
      });
  });
});
