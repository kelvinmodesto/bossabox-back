const mongoose = require('mongoose');
const { schema } = require('./schema');

const Tool = mongoose.model('tool', schema);

module.exports = { Tool };
