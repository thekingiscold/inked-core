const mongoose = require("mongoose");

const artistDataScheme = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  profileImageUrl: { type: String, required: true },
  phoneNo: { type: String, required: true },
  socialMediaLinks: [{ type: String, required: true }],
  bio: { type: String, required: true },
  experience: { type: String, required: true },
  tags: { type: String, required: true },
  availability: { type: String, required: true },
  perInchPrice: { type: String, required: true },
  inkTypesAvailable: { type: String, required: true },
  portfolio: [{ type: String, required: true }],
  featuredWork: [{ type: String, required: false }],
  customerReviews: [{ type: String, required: false}]
});

module.exports = mongoose.model("ArtistData", artistDataScheme);
