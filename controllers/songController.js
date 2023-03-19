const getSongs = (req, res) => {
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

// For ‘/song/:songId/’

const getSong = (req, res, next) => {
  res
    .status(200)
    .setHeader("Content-Type", "application/json")
    .json({ message: `Getting song with id as ${req.params.songId}` });
};

const updateSong = (req, res, next) => {
  res
    .status(200)
    .setHeader("Content-Type", "application/json")
    .json({ message: `Updating the song with id of ${req.params.songId}` });
};

const deleteSong = (req, res, next) => {
  res
    .status(200)
    .setHeader("Content-Type", "application/json")
    .json({ message: `Deleting song ${req.params.songId}` });
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
