const express = require("express");
const {
  getAllPosts,
  getOnePost,
  addNewPost,
} = require("..//controllers/postController");
const postsRouter = express.Router();

postsRouter.get("/", getAllPosts);

postsRouter.get("/:id", getOnePost);
postsRouter.post("/", addNewPost);

module.exports = postsRouter;
