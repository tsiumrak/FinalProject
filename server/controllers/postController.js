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
  const { name, title, text, photo } = req.body;

  try {
    const result = await Post.create({ name, text, title, photo });
    return res.json(result);
  } catch (err) {
    res.json(err.message);
  }
  res.json("Add one post");
};
const updatePost = async (req, res) => {
  const id = req.params.id;
  const { name, text, title, photo } = req.body;

  try {
    const post = await Post.findByIdAndUpdate(
      id,
      { name, text, title, photo },
      { new: true }
    );
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

module.exports = {
  getAllPosts,
  getOnePost,
  addNewPost,
  updatePost,
};
