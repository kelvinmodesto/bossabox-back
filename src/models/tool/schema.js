const mongoose = require('mongoose');

const schema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  insertedAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = { schema };
