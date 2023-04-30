const express = require("express");
const app = express();
const postsRouter = express.Router();

postsRouter.get("/", (req, res) => {
  res.json("All posts");
});

postsRouter.get("/:id", (req, res) => {
  res.json("One post");
});
postsRouter.post("/", (req, res) => {
  res.json("Add one post");
});
app.use("/api/posts", postsRouter);
