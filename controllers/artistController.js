const Artist = require("../models/Artist");

const getArtists = async (req, res) => {
  const filter = {};
  const options = {};

  if (Object.keys(req.query).length) {
    const { limit, sortByGenre, firstName, lastName, genre } = req.query;

    if (firstName) filter.firstName = firstName;
    if (lastName) filter.lastName = lastName;
    if (genre) filter.genre = genre;

    if (limit) options.limit = limit;
    if (sortByGenre)
      options.sort = {
        genre: sortByGenre === "asc" ? 1 : -1,
      };
  }
  try {
    const artist = await Artist.find({}, filter, options);
    res.status(200).setHeader("Content-Type", "application/json").json(artist);
  } catch (err) {
    throw new Error(`Error creating artists, ${err.message}`);
  }
};

const postArtist = async (req, res) => {
  try {
    const artist = await Artist.create(req.body);
    res.status(200).setHeader("Content-Type", "application/json").json(artist);
  } catch (err) {
    throw new Error(`Error updating artists, ${err.message}`);
  }
};

const deleteArtists = async (req, res) => {
  try {
    const deleted = await Artist.deleteMany();
    res.status(200).setHeader("Content-Type", "application/json").json(deleted);
  } catch (err) {
    throw new Error(`Error deleting artists, ${err.message}`);
  }
};

// For :/artist/:artistId

const getArtist = async (req, res, next) => {
  try {
    const artist = await Artist.findById(req.params.artistId);
    res.status(200).setHeader("Content-Type", "application/json").json(artist);
  } catch (err) {
    throw new Error(
      `Error getting artist with id: ${req.params.artistId} ${err.message}`
    );
  }
};
const updateArtist = async (req, res, next) => {
  try {
    const artist = await Artist.findByIdAndUpdate(
      req.params.artistId,
      req.body,
      { new: true }
    );
    res.status(200).setHeader("Content-Type", "application/json").json(artist);
  } catch (err) {
    throw new Error(
      `Error updating artist with id: ${req.params.artistId} ${err.message}`
    );
  }
};
const deleteArtist = async (req, res, next) => {
  try {
    const deleted = await Artist.findByIdAndDelete(req.params.artistId);
    res.status(200).setHeader("Content-Type", "application/json").json(deleted);
  } catch (err) {
    throw new Error(
      `Error deleting artist with id of ${req.params.artistId} ${err.message}`
    );
  }
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
