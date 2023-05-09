const express = require("express");
const mongoose = require("mongoose");
const postsRouter = require("./routes/postsRouter");
const usersRouter = require("./routes/usersRouter");
const cors = require("cors");

const app = express();
app.use(cors());

const { SERVER_PORT, CON_STRING } = require("./config/config");

console.log("port will be set to " + SERVER_PORT);

app.use("/api/posts", postsRouter);
app.use("/api/users", usersRouter);

const main = async () => {
  await mongoose.connect(CON_STRING);
  app.listen(SERVER_PORT, () => console.log("test"));
  console.log("Datas send");
};
main();

process.on("SIGINT", async () => {
  await mongoose.disconnect();
  process.exit();
});
