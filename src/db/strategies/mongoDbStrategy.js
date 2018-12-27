const IDb = require('./base/IDb');

class MongoDBStrategy extends IDb {
  constructor() {
    super('MongoDB');
  }

  create(item) {
    return `MongoDB read ${item}`;
  }

  read(item) {
    return `MongoDB read ${item}`;
  }

  update(id, item) {
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
