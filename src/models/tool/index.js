import mongoose from 'mongoose';
import schema from './schema';

const Tool = mongoose.model('tool', schema);

export default Tool;
