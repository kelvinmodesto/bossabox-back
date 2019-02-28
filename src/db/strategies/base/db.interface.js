import NotImplementedException from '../../../utils/exception/NotImplementedException';

export default class IDb {
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

  isConnected() {
    throw new NotImplementedException();
  }
}
