const Post = require("..//models/posts");

const getAllPosts = async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
};

const getOnePost = async (req, res) => {
  const id = req.params.id;
  const onePost = await Post.findOne(id);
  res.json(onePost);
};

const addNewPost = (req, res) => {
  res.json("Add one post");
};

module.exports = {
  getAllPosts,
  getOnePost,
  addNewPost,
};
