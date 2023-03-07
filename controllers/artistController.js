const getArtists = (req, res) => {
  res
    .status(200)
    .setHeader("Content-Type", "application/json")
    .json({ message: "You hit me! Show me all the Artists" });
};

const postArtist = (req, res) => {
  res
    .status(200)
    .setHeader("Content-Type", "application/json")
    .json({ message: `Posting an artist` });
};

const deleteArtists = (req, res) => {
  res
    .status(200)
    .setHeader("Content-Type", "application/json")
    .json({ message: "Deleting an artist" });
};

module.exports = {
  getArtists,
  postArtist,
  deleteArtists,
};
res = {
  status: 200,
};
