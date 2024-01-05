const TattooTypesThumbnail = require("../models/tattooTypesThumbnail");

exports.fetchTattoTypeThumbnailData = async (req, res) => {
  try {
    const tattooTypesThumbnails = await TattooTypesThumbnail.find();
    res.json(tattooTypesThumbnails);
  } catch (error) {
    console.log("Error fetching tattoo types thumbnails: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
