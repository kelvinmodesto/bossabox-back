const mongoose = require('mongoose');
const ContextStrategy = require('./base/contextStrategy');

class MongoDBStrategy extends ContextStrategy {
  constructor(schema, collection) {
    super(mongoose);
    this.schema = schema;
    this.collection = collection;
  }

  create(item) {
    return `MongoDB read ${item}`;
  }

  read(item) {
    return `MongoDB read ${item}`;
  }

  update(item) {
    return `MongoDB update ${id}: ${item}`;
  }

  delete(id) {
    return `MongoDB delete ${id}`;
  }

  isConnected(id) {
    return `MongoDB isConnected ${id}`;
  }
}

module.exports = MongoDBStrategy;
