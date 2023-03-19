const Song = require("../models/Song");

const getSongs = async (req, res, next) => {
  if (Object.keys(req.query).length) {
    const { songTitle, artist, gender } = req.query;

    const filter = [];
    if (songTitle) filter.push(songTitle);
    if (artist) filter.push(artist);
    if (gender) filter.push(gender);
    for (const query of filter) {
      console.log(`Searching song by ${query}`);
    }
  }
  try {
    const songs = await Song.find();
    res.status(200).setHeader("Content-Type", "application/json").json(songs);
  } catch (err) {
    throw new Error(`Error retrieving songs for: ${err.message}`);
  }
};

const postSong = async (req, res, next) => {
  try {
    const songPayload = await Song.create(req.body);
    res
      .status(200)
      .setHeader("Content-Type", "application/json")
      .json(songPayload);
  } catch (err) {
    throw new Error(`Error creating song: ${err.message}`);
  }
};

const deleteSongs = async (req, res) => {
  const deletedSongs = await Song.deleteMany();
  try {
    res
      .status(200)
      .setHeader("Content-Type", "application/json")
      .json(deletedSongs);
  } catch (err) {
    throw new Error(`Error deleting songs ${err.message} `);
  }
};

// For ‘/song/:songId/’

const getSong = async (req, res, next) => {
  try {
    const song = await Song.findById(req.params.songId);
    res.status(200).setHeader("Content-Type", "application/json").json(song);
  } catch (err) {
    throw new Error(
      `Error getting song with id: ${req.params.songId},: ${err.message}`
    );
  }
};

const updateSong = async (req, res, next) => {
  try {
    const songPayload = await Song.findByIdAndUpdate(
      req.params.songId,
      req.body,
      { new: true }
    );
    res
      .status(200)
      .setHeader("Content-Type", "application/json")
      .json(songPayload);
  } catch (err) {
    throw new Error(`Error updating song with id:${req.params.songId},: `);
  }
};

const deleteSong = async (req, res, next) => {
  try {
    const deletedSong = await Song.findByIdAndDelete(req.params.songId);
    res
      .status(200)
      .setHeader("Content-Type", "application/json")
      .json(deletedSong);
  } catch (err) {
    throw new Error(
      `Error deleting song with id: ${req.params.songId}`,
      err.message
    );
  }
};

module.exports = {
  getSongs,
  postSong,
  deleteSongs,
  getSong,
  updateSong,
  deleteSong,
};
res = {
  status: 200,
};
