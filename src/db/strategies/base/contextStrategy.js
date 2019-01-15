const IDb = require('./IDb');

class ContextStrategy extends IDb {
  constructor(database) {
    super();
    this.database = database;
  }

  create(item) {
    return this.database.create(item);
  }

  read(item = {}) {
    return this.database.read(item);
  }

  update(id, item) {
    return this.database.update(id, item);
  }

  delete(id) {
    return this.database.delete(id);
  }
}

module.exports = ContextStrategy;
