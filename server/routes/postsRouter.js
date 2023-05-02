const express = require("express");
const {
  getAllPosts,
  getOnePost,
  addNewPost,
} = require("../controllers/postController");
const postsRouter = express.Router();
const jsonParser = express.json();

postsRouter.get("/", getAllPosts);

postsRouter.get("/:id", getOnePost);
postsRouter.post("/", jsonParser, addNewPost);

module.exports = postsRouter;
