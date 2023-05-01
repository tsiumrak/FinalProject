const Post = require("..//models/posts");

const getAllPosts = async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
};

const getOnePost = (req, res) => {
  const id = req.params.id;
  const onePost = postsModel.getOnePostByDB(id);
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
