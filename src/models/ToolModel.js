
class ToolModel {
  constructor(model, schema, collection, db) {
    this.schema = schema;
    this.buildModel(model, collection, db);
  }

  buildModel(model, collection, db) {
    this.model = db.model(model, this.schema, collection);
  }
}

module.exports = ToolModel;
