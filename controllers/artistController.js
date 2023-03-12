const getArtists = (req, res) => {
  if (Object.keys(req.query).length) {
    const { firstName, lastName, genre } = req.query;

    const filter = [];
    if (firstName) filter.push(firstName);
    if (lastName) filter.push(lastName);
    if (genre) filter.push(genre);
    for (const query of filter) {
      console.log(`Searching artist by: ${query}`);
    }
  }
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

// For :/artist/:artistId

const getArtist = (req, res, next) => {
  res
    .status(200)
    .setHeader("Content-Type", "application/json")
    .json({ message: `Getting artist with id of ${req.params.artistId}` });
};
const updateArtist = (req, res, next) => {
  res
    .status(200)
    .setHeader("Content-Type", "application/json")
    .json({ message: `Updating artist with id of ${req.params.artistId}` });
};
const deleteArtist = (req, res, next) => {
  res
    .status(200)
    .setHeader("Content-Type", "application/json")
    .json({ message: `Deleting artist with id of ${req.params.artistId}` });
};

module.exports = {
  getArtists,
  postArtist,
  deleteArtists,
  getArtist,
  updateArtist,
  deleteArtist,
};
res = {
  status: 200,
};
