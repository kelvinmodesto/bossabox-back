import { Router } from 'express';

import MongoDB from '../db/strategies/mongodb/mongoDBStrategy';
import Context from '../db/strategies/base/contextStrategy';

// controllers list
import ToolsController from '../controllers/ToolsController';

// models list
import { Tool } from '../models/tool';

// Put all models in a single object
const models = { Tool };

const context = new Context(new MongoDB(MongoDB.connect(), models.Tool));
const routersInit = () => {
  const toolsController = new ToolsController(Router(), context);

  toolsController.router.use('/tools', toolsController.init());

  return toolsController.router;
};

export default routersInit;
