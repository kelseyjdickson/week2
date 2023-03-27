const Song = require("../models/Song");

const getSongs = async (req, res, next) => {
  const filter = {};
  const options = {};

  if (Object.keys(req.query).length) {
    const { limit, sortByArtist, songTitle, artist, gender } = req.query;

    if (songTitle) filter.songTitle = songTitle;
    if (artist) filter.artist = artist;
    if (gender) filter.gender = gender;
    if (limit) options.limit = limit;

    if (sortByArtist)
      options.sort = {
        artist: sortByArtist === "asc" ? 1 : -1,
      };
  }
  try {
    const songs = await Song.find({}, filter, options);
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

const getSongRatings = async (req, res, next) => {
  try {
    const song = await Song.findById(req.params.songId);
    res
      .status(200)
      .setHeader("Content-Type", "application/json")
      .json(song.ratings);
  } catch (err) {
    next(err);
  }
};
const postSongRatings = async (req, res, next) => {
  try {
    const song = await Song.findById(req.params.songId);
    song.ratings.push(req.body);
    //Saves new song rating to db
    await song.save();
    res
      .status(200)
      .setHeader("Content-Type", "application/json")
      .json(song.ratings);
  } catch (err) {
    next(err);
  }
};
const deleteSongRatings = async (req, res, next) => {
  try {
    const song = await Song.findById(req.params.songId);
    song.ratings = [];
    await song.save();
    res
      .status(200)
      .setHeader("Content-Type", "application/json")
      .json({
        message: `Deleted all ratings for song with id of ${req.params.songId}`,
      });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getSongs,
  postSong,
  deleteSongs,
  getSong,
  updateSong,
  deleteSong,
  getSongRatings,
  postSongRatings,
  deleteSongRatings,
};
res = {
  status: 200,
};
