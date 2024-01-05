const express = require("express");
const router = express.Router();
const tattooTypesThumbnailController = require("../controllers/tattoTypeThumbnailController");

router.get(
  "/tattoo-thumbnail-data",
  tattooTypesThumbnailController.fetchTattoTypeThumbnailData
);

module.exports = router;
