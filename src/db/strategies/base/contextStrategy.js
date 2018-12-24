const { IDb } = require('./IDb');

class ContextStrategy extends IDb {
  constructor(database) {
    super();
    this.database = database;
  }
}

module.exports = ContextStrategy;
