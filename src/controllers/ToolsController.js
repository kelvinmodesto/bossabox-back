const RequestError = require('../utils/exception/RequestErrorException');

class ToolsController {
  constructor(router, context) {
    this.router = router;
    this.context = context;
  }

  init() {
    // routes list
    this.listTools();
    this.deleteTool();
    this.createTool();
    return this.router;
  }

  listTools() {
    this.router.get('/tools', async (req, res, next) => {
      try {
        const { link, description, title } = req.query;
        const list = await this.context.read({ link, description, title });
        let result = list;
        if (req.query.tags) {
          result = list.filter(item => item.tags.reduce(
            (acc, elem) => ((acc === true) || (acc === req.query.tags))
              || (elem === req.query.tags),
          ));
        }
        if (res.status(200)) {
          res.send({ result });
        } else {
          throw new RequestError();
        }
      } catch (error) {
        next(error);
      }
    });
  }

  createTool() {
    this.router.post('/tools', async (req, res, next) => {
      try {
        const {
          title,
          link,
          description,
          tags,
          _id,
        } = await this.context.create(req.query);
        if (res.status(200)) {
          res.send({
            title,
            link,
            description,
            tags,
            id: _id,
          });
        } else {
          throw new RequestError();
        }
      } catch (error) {
        next(error);
      }
    });
  }

  deleteTool() {
    this.router.delete('/tools/:id', async (req, res, next) => {
      try {
        const { n } = await this.context.delete(req.id);
        if (n === 1) {
          res.send({});
        } else {
          throw new RequestError();
        }
      } catch (error) {
        next(error);
      }
    });
  }
}

module.exports = ToolsController;
