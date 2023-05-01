const express = require("express");
const mongoose = require("mongoose");
const postsRouter = require("./routes/postsRouter");
const PORT = 8000;
const app = express();
const BD = "mongodb://localhost:27017";

app.use("/api/posts", postsRouter);

const main = async () => {
  await mongoose.connect(`${BD}/postsdb`);
  app.listen(PORT);
  console.log("Datas send");
};
main();

process.on("SIGINT", async () => {
  await mongoose.disconnect();
  process.exit();
});
