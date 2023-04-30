const express = require("express");
const postsRouter = require("./routes/postsRouter");
const PORT = 8000;
const app = express();

app.use("/api/posts", postsRouter);

app.listen(PORT);
