

// Todo.js
import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  Todo: String,
});

export default mongoose.models.Todo || mongoose.model('Todo', todoSchema);


