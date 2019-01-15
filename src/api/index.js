const { Router } = require('express');

const MongoDB = require('../db/strategies/mongodb/mongoDBStrategy');
const Context = require('../db/strategies/base/contextStrategy');

// controllers list
const ToolsController = require('../controllers/ToolsController');

// models list
const { Tool } = require('../models/tool');

// Put all models in a single object
const models = { Tool };

const context = new Context(MongoDB.connect(), models.Tool);
const routersInit = () => {
  const toolsController = new ToolsController(Router(), context);

  toolsController.router.use('/tools', toolsController.init());

  return toolsController.router;
};

module.exports = routersInit;
