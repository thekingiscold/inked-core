const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
// Import the userController

// Create a new user (POST request)
router.post("/users", userController.createUser);
router.get("/get-userdetails", userController.fetchUserDetails);
router.post("/login", userController.userAuthentication);

module.exports = router;
