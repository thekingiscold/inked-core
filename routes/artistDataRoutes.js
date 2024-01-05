const express = require("express");
const router = express.Router();
const artistController = require("../controllers/artistController");

router.post("/artist", artistController.createArtist);
router.get("/get-Artistdetails", artistController.fetchArtistDetails);

module.exports = router;
