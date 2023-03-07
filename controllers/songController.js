const getSongs = (req, res) => {
  res
    .status(200)
    .setHeader("Content-Type", "application/json")
    .json({ message: "You hit me! Show me all the songs" });
};

const postSong = (req, res) => {
  res
    .status(200)
    .setHeader("Content-Type", "application/json")
    .json({ message: `Posting a song` });
};

const deleteSongs = (req, res) => {
  res
    .status(200)
    .setHeader("Content-Type", "application/json")
    .json({ message: "Deleting the songs" });
};

module.exports = {
  getSongs,
  postSong,
  deleteSongs,
};
res = {
  status: 200,
};
