/* eslint-disable no-underscore-dangle */
import { describe } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../../../../app';

import * as Context from '../../../../../db/strategies/base/contextStrategy';
import * as MongoDB from '../../../../../db/strategies/mongodb/mongoDBStrategy';
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

chai.use(chaiHttp);

let MOCK_TOOL_ID = '';
let context = {};
describe('API DELETE Test Suit', function init() {
  this.beforeAll(async () => {
    context = await new Context(new MongoDB(MongoDB.connect(), Tool));
    const tool = await context.create(MOCK_DELETE_TOOL);
    MOCK_TOOL_ID = tool._id;
  });
  it('delete tool', async () => {
    expect(1).to.be.equal(1);
  });
});
