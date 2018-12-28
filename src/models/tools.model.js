const IModel = require('./IModel');

class ToolModel extends IModel {
  constructor(name, collection) {
    super();
    this.buildModel(name, collection, db);
  }

  buildModel(name, collection, db) {
    this.model = db.model(name, this.schema, collection);
  }
}

module.exports = ToolModel;
