const express = require("express");
const {
  addNewUser,
  getUserLogin,
  getAllUsers,
} = require("../controllers/userController");
const usersRouter = express.Router();
const jsonParser = express.json();

usersRouter.get("/", getAllUsers);
usersRouter.post("/", jsonParser, addNewUser);
usersRouter.post("/login", jsonParser, getUserLogin);

module.exports = usersRouter;
