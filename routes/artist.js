const express = require("express");
const router = express.Router();

const {
  getArtists,
  postArtist,
  deleteArtists,
  getArtist,
  updateArtist,
  deleteArtist,
} = require("../controllers/artistController");

router.route("/").get(getArtists).post(postArtist).delete(deleteArtists);
router
  .route("/:artistId")
  .get(getArtist)
  .post(updateArtist)
  .delete(deleteArtist);
module.exports = router;
