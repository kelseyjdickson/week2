const res = require("express/lib/response");

const getUsers = (req, res) => {
  if (Object.keys(req.query).length) {
    const { userName, gender } = req.query;

    const filter = [];
    if (userName) filter.push(userName);
    if (gender) filter.push(gender);

    for (const query of filter) {
      console.log(`Searching song by ${query}`);
    }
  }
  res
    .status(200)
    .setHeader("Content-Type", "application/json")
    .json({ message: "You hit me! Show me all the Users" });
};

const postUser = (req, res) => {
  res
    .status(200)
    .setHeader("Content-Type", "application/json")
    .json({ message: `Posting a User` });
};

const deleteUsers = (req, res) => {
  res
    .status(200)
    .setHeader("Content-Type", "application/json")
    .json({ message: "Deleting a User" });
};

// For /user/:userId

const getUser = (req, res, next) => {
  res
    .status(200)
    .setHeader("Content-Type", "application/json")
    .json({ message: `Getting user with id of ${req.params.userId}` });
};
const updateUser = (req, res, next) => {
  res
    .status(200)
    .setHeader("Content-Type", "application/json")
    .json({ message: `Updating user with id of ${req.params.userId}` });
};
const deleteUser = (req, res, next) => {
  res
    .status(200)
    .setHeader("Content-Type", "application/json")
    .json({ message: `Deleting user with id of ${req.params.userId}` });
};

module.exports = {
  getUsers,
  postUser,
  deleteUsers,
  getUser,
  updateUser,
  deleteUser,
};
