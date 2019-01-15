class RequestErrorException extends Error {
  constructor() {
    super('Request Error');
  }
}

module.exports = RequestErrorException;
