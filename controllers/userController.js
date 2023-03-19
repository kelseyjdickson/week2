const User = require("../models/User");

const getUsers = async (req, res, next) => {
  if (Object.keys(req.query).length) {
    const { userName, gender } = req.query;
    const filter = [];
    if (userName) filter.push(userName);
    if (gender) filter.push(gender);

    for (const query of filter) {
      console.log(`Searching user by ${query}`);
    }
  }
  try {
    const users = await User.find();
    res.status(200).setHeader("Content-Type", "application/json").json(users);
  } catch (err) {
    throw new Error(`Error getting users, ${err.message}`);
  }
};

const postUser = async (req, res) => {
  const users = await User.create(req.body);
  res.status(200).setHeader("Content-Type", "application/json").json(users);
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

module.exports = {
  getUsers,
  postUser,
  deleteUsers,
  getUser,
  updateUser,
  deleteUser,
};
