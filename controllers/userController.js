const User = require("../models/User");

const getUsers = async (req, res, next) => {
  const filter = {};
  const options = {};
  if (Object.keys(req.query).length) {
    const { limit, sortByAge, userName, age } = req.query;

    if (userName) filter.userName = userName;
    if (age) filter.age = age;

    if (limit) options.limit = limit;
    if (sortByAge)
      options.sort = {
        age: sortByAge === "asc" ? 1 : -1,
      };
  }
  try {
    const users = await User.find();
    res.status(200).setHeader("Content-Type", "application/json").json(users);
  } catch (err) {
    throw new Error(`Error getting users, ${err.message}`);
  }
};

const postUser = async (req, res) => {
  const user = await User.create(req.body);
  sendTokenResponse(user, 201, res);

  try {
  } catch (err) {
    throw new Error(`Error creating user, ${err.message}`);
  }
};

const deleteUsers = async (req, res) => {
  try {
    const deleted = await User.deleteMany();
    res.status(200).setHeader("Content-Type", "application/json").json(deleted);
  } catch (err) {
    throw new Error(`Error deleting user, ${err.message}`);
  }
};

// For /user/:userId

const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);
    res.status(200).setHeader("Content-Type", "application/json").json(user);
  } catch (err) {
    throw new Error(
      `Error getting user with id${req.params.userId}, ${err.message}`
    );
  }
};
const updateUser = async (req, res, next) => {
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.userId,
      req.body,
      {
        new: true,
      }
    );
    res
      .status(200)
      .setHeader("Content-Type", "application/json")
      .json(updateUser);
  } catch (err) {
    throw new Error(
      `Error Updating user with id: ${req.params.userId}, ${err.message}`
    );
  }
};
const deleteUser = async (req, res, next) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.userId);
    res.status(200).setHeader("Content-Type", "application/json").json(deleted);
  } catch (err) {
    throw new Error(
      `Error deleting user with id:${req.params.userId}, ${err.message}`
    );
  }
};

const sendTokenResponse = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  res
    .status(statusCode)
    .cookie("token", token, options)
    .json({ success: true, token });
};

module.exports = {
  getUsers,
  postUser,
  deleteUsers,
  getUser,
  updateUser,
  deleteUser,
};
