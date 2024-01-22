const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRoutes = require("./routes/userRoutes");
const tattooTypeRouter = require("./routes/tattooTypeRoute");
const artistRoutes = require("./routes/artistDataRoutes");
const cors = require("cors");
const port = 3001;

//connect to mongoDB
// mongoose
//   .connect("mongodb://localhost/inkedapp", {
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((error) => {
//     console.log("Error connecting to MongoDb:", error);
//   });

mongoose
  .connect("mongodb://mongodb:27017/inkedapp", {
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDb:", error);
  });

// app.use(cors({ origin: "http://localhost:3000" }));
app.use(cors({ origin: "http://localhost:8080" }));

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use("/api", tattooTypeRouter);
app.use("/api", userRoutes);
app.use("/api", artistRoutes);
