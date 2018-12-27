const mongoose = require('mongoose');

const toolSchema = new mongoose.Schema({
  id: Number,
  title: String,
  link: String,
  description: String,
  tags: [String],
});

class ToolModel {
  constructor(model, db) {
    this.schema = toolSchema;
    this.buildModel(model);
    this.db = db;
  }

  buildModel(model) {
    this.model = mongoose.model(model, this.schema);
  }
}

module.exports = ToolModel;
