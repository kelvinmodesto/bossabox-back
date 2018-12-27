const mongo = require('../db/strategies/mongoDbStrategy');
const { ToolModel } = require('../models/toolModel');

const toolModel = new ToolModel('tools', mongo);

console.log(toolModel.schema);

module.exports = toolModel;
