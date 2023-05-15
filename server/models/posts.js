const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postsSchema = new Schema({
  name: String,
  title: String,
  text: String,
  photo: String,
});
module.exports = mongoose.model("Post", postsSchema);
