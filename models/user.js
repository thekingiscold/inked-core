const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  accountType: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String },
  address2: { type: String },
  city: { type: String },
  state: { type: String },
  zip: { type: String },
});

module.exports = mongoose.model("User", userSchema);
