const mongoose = require('mongoose');

const ContextStrategy = require('../base/contextStrategy');

const STR_CONNECTION = 'mongodb://admin:admin@localhost:27017/admin';

class MongoDBStrategy extends ContextStrategy {
  constructor(connection, model) {
    super();
    this.model = model;
    this.connection = connection;
  }

  async create(item) {
    return this.model.create(item);
  }

  async read(item = {}) {
    return this.model.find(item);
  }

  async update(id, item) {
    return this.model.updateOne({ _id: id }, { $set: item });
  }

  async delete(id) {
    return this.model.deleteOne({ _id: id });
  }

  async isConnected() {
    const state = this.connection.readyState;
    if (state === 1) return state;
    if (state !== 2) return state;
    await new Promise(resolve => setTimeout(resolve, 1000));
    return this.connection.readyState;
  }

  static connect() {
    mongoose.connect(STR_CONNECTION, { userNewUrlParser: true });
  }
}

module.exports = MongoDBStrategy;
