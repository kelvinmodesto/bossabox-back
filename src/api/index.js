const mongoose = require('mongoose');

// const mongo = require('../db/strategies/mongoDbStrategy');
const ToolModel = require('../models/ToolModel');

mongoose.connect('mongodb://admin:admin@localhost:27017/admin', { useNewUrlParser: true });

const toolModel = new ToolModel('Tool',
  new mongoose.Schema({
    id: Number,
    title: String,
    link: String,
    description: String,
    tags: [String],
  }), 'tools', mongoose);

module.exports = toolModel;
