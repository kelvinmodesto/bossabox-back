import mongoose from 'mongoose';

const schema = mongoose.Schema({
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
  tags: [{
    type: String,
    required: true,
  }],
  insertedAt: {
    type: Date,
    default: new Date(),
  },
});

export default schema;
