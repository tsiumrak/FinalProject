const express = require("express");
const mongoose = require("mongoose");
const postsRouter = require("./routes/postsRouter");
const PORT = 8000;
const app = express();

app.use("/api/posts", postsRouter);

const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/productsdb");
  app.listen(PORT);
};
main();

process.on("SIGINT", async () => {
  await mongoose.disconnect();
  process.emit();
});
