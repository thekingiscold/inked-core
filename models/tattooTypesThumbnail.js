const mongoose = require("mongoose");

const tattooTypesThumbnailSchema = new mongoose.Schema(
  {
    img: String,
    title: String,
    text: String,
  },
  { collection: "tattooThumbnailData" }
);

module.exports = mongoose.model(
  "TattooTypesThumbnail",
  tattooTypesThumbnailSchema
);
