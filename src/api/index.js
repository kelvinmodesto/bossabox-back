const mongoose = require('mongoose');

const Mongo = require('../db/strategies/mongoDbStrategy');
const ToolModel = require('../models/tools.model');
const ToolsController = require('../controllers/tools.controller');

const STR_CONNECTION = 'mongodb://admin:admin@localhost:27017/admin';

mongoose.connect(STR_CONNECTION, { useNewUrlParser: true });

const toolsAPI = new ToolsController(
  new ToolModel('Tool',
    new mongoose.Schema({
      id: Number,
      title: String,
      link: String,
      description: String,
      tags: [String],
    }), 'tools', mongoose),
  new Mongo(),
);

module.exports = toolsAPI;
