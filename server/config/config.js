const SERVER_PORT = 8080;
const DB_POSTS = "postsdb";
const CON_STRING = `mongodb://localhost:27017/${DB_POSTS}`;
const JWT_SECRET = "qwerty";

module.exports = {
  SERVER_PORT,

  CON_STRING,
  JWT_SECRET,
};
