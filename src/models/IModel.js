const NotImplementedException = require('../utils/exception/NotImplementedException');

class IModel {
  list() {
    throw new NotImplementedException();
  }
}

module.exports = IModel;
