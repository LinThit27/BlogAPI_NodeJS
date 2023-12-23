const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: { type: String },
  content: { type: String },
  isDeleted: { type: Boolean, default: false },
  picture: [{ type: String }],
});

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
