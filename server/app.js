const express = require("express");
const mongoose = require("mongoose");
const postsRouter = require("./routes/postsRouter");
const cors = require("cors");

const app = express();
app.use(cors());

const { SERVER_PORT, CONNECTION_STRING } = require("./config/comfig");

app.use("/api/posts", postsRouter);

const main = async () => {
  await mongoose.connect(CONNECTION_STRING);
  app.listen(SERVER_PORT);
  console.log("Datas send");
};
main();

process.on("SIGINT", async () => {
  await mongoose.disconnect();
  process.exit();
});
