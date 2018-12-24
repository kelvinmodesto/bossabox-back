const express = require('express');

const routersInit = (config) => {
  const router = express();
  router.use('/list', null, { config });
};

module.exports = routersInit;
