const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      accountType: req.body.accountType,
      email: req.body.email,
      password: hashedPassword,
      address: req.body.address,
      address2: req.body.address2,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.fetchUserDetails = async (req, res) => {
  try {
    const userData = await User.find();
    res.json(userData);
  } catch (error) {
    console.log("Error fetching user data: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.userAuthentication = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Authentication failed" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Authentication failed" });
    }
    res.json({ accountType: user.accountType });
  } catch (error) {
    console.error("Login error: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
