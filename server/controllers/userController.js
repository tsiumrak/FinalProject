const { JWT_SECRET } = require("../config/config");
const User = require("../models/users");
const jwt = require("jsonwebtoken");

const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

const addNewUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const result = await User.create({ firstName, lastName, email, password });
    return res.json(result);
  } catch (err) {
    res.json(err.message);
  }
};

const getUserLogin = async (req, res) => {
  if (req.body) {
    const { email, password } = req.body;
    const loginUser = await User.findOne({ email: email });

    if (!loginUser) {
      const token = jwt.sign(req.body, JWT_SECRET);
      res.status(200).json({
        signed_user: login.req.body,
        token,
      });
      return res.status(404).json({
        errorMessage: "Користувача не знайдено",
      });
    }

    if (loginUser.password !== password) {
      return res.status(401).json({
        errorMessage: "Невірний email або пароль",
      });
    }

    const token = jwt.sign(req.body, JWT_SECRET);
    res.status(200).json({
      signed_user: login.req.body,
      token,
    });
    res.json({
      message: "Користувач успішно авторизований",
    });
  } else {
    res.status(403).json({
      errorMessage: "Будь ласка, надайте електронну адресу та пароль",
    });
  }
};

module.exports = {
  getAllUsers,
  addNewUser,
  getUserLogin,
};
