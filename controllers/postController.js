const getAllPosts = (req, res) => {
  res.json("All posts");
};

const getOnePost = (req, res) => {
  res.json("One post");
};

const addNewPost = (req, res) => {
  res.json("Add one post");
};

module.exports = {
  getAllPosts,
  getOnePost,
  addNewPost,
};
