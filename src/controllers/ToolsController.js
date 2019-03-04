import * as _ from 'lodash';
import RequestError from '../utils/exception/RequestErrorException';

export default class ToolsController {
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
        const list = await this.context.read(_.pick({ link, description, title }));
        let data = list;
        if (req.query.tags) {
          data = list.filter(item => item.tags.reduce(
            (acc, elem) => ((acc === true) || (acc === req.query.tags))
              || (elem === req.query.tags),
          ));
        }
        if (res.status(200)) {
          res.send(data);
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
        } = await this.context.create(req.body);
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
        const { n } = await this.context.delete(req.params.id);
        if (n === 1) {
          res.send({});
        }
      } catch (error) {
        next(error);
      }
    });
  }
}
