const { IDb } = require('./base/IDb');

class MongoDBStrategy extends IDb {
  constructor() {
    super('MongoDB');
  }

  create(item) {
    return `MongoDB ${item}`;
  }
}

module.exports = MongoDBStrategy;
