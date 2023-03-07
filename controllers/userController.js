const getUsers = (req, res) => {
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

module.exports = {
  getUsers,
  postUser,
  deleteUsers,
};
res = {
  status: 200,
};
