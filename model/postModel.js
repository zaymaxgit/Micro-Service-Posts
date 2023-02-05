const mg = require("mongoose");

const postSchema = new mg.Schema({
  idPost: { type: String, default: null },
  header: { type: String, default: null },
  body: { type: String, default: null },
  date: { type: String, default: null },
  author: { type: String, default: null },
  idAuthor: { type: String, default: null },
  like: { type: Number, default: 0 },
  categories: { type: String, default: null },
});

module.exports = mg.model("post", postSchema);
