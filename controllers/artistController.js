const Artist = require("../models/artistData");

exports.createArtist = async (req, res) => {
  try {
    const {
      name,
      location,
      phoneNo,
      socialMediaLinks,
      bio,
      experience,
      tags,
      availability,
      perInchPrice,
      inkTypesAvailable,
      portfolio,
      featuredWork,
      profileImageUrl,
      customerReviews
    } = req.body;

    const newArtist = new Artist({
      name,
      location,
      phoneNo,
      socialMediaLinks,
      bio,
      experience,
      tags,
      availability,
      perInchPrice,
      inkTypesAvailable,
      portfolio,
      featuredWork,
      profileImageUrl,
      customerReviews
    });

    const savedArtist = await newArtist.save();

    res.status(201).json(savedArtist); // Send back the saved artist data as a response
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle the error and send an appropriate response
  }
};

exports.fetchArtistDetails = async (req, res) => {
  try {
    const artistData = await Artist.find();
    res.json(artistData);
  } catch (error) {
    console.log("Error fetching artist data: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
