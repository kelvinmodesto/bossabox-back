const { NotImplementedException } = require('../../../utils/exception/NotImplementedException');

class IDb {
  create(item) {
    throw new NotImplementedException();
  }
  read(item) {
    throw new NotImplementedException();
  }
  update(id, item) {
    throw new NotImplementedException();
  }
  delete(id) {
    throw new NotImplementedException();
  }
  isConnected(id) {
    throw new NotImplementedException();
  }
}

module.exports = IDb;
