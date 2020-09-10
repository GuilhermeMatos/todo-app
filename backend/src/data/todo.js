const resful = require("node-restful");
const mongoose = resful.mongoose;

const todoSchema = new mongoose.Schema({
  description: { type: String, require: true },
  done: { type: Boolean, require: true, default: false },
  createdAt: { type: Date, default: Date.now() },
});

module.exports = resful.model("Todo", todoSchema);
