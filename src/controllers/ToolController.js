class ToolController {
  constructor(router, context) {
    this.router = router;
    this.context = context;
  }

  init() {
    // routes list
    this.getTool();

    return this.routes;
  }

  getTool() {
    this.router.get('/tool', async (req, res, next) => {
      try {
        const result = await this.context.read(req.query);
        res.status(200).send({ result });
      } catch (error) {
        next(error);
      }
    });
  }

  list() {
    return this.model.find({});
  }
}

module.exports = ToolController;
