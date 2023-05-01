const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postsSchema = new Schema({
  name: String,
  text: String,
});
module.exports = mongoose.model("Post", postsSchema);
