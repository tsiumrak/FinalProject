const Post = require("../models/posts");

const getAllPosts = async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
};

const getOnePost = async (req, res) => {
  const id = req.params.id;

  try {
    const post = await Post.findById(id);
    if (post) return res.status(200).json(post);

    return res.status(404).json({
      message: "No found post",
    });
  } catch (err) {
    return res.status(404).json({
      message: "wrong id format",
    });
  }
};

const addNewPost = async (req, res) => {
  const { name, text } = req.body;

  try {
    const result = await Post.create({ name, text });
    return res.json(result);
  } catch (err) {
    res.json(err.message);
  }
  res.json("Add one post");
};

module.exports = {
  getAllPosts,
  getOnePost,
  addNewPost,
};
