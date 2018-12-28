class ToolsController {
  constructor(model) {
    this.model = model;
  }

  list() {
    return this.model.find({});
  }
}

module.exports = ToolsController;
