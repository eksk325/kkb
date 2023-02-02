const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

const port = process.env.PORT || 8000;
require("dotenv").config();

// DB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => {
    console.log("UNABLE TO CONNECT TO DB");
    console.log(e);
  });

// User parsing middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// Import the routes
const userRoutes = require("./routes/user");

// Using routes
app.use("/api", userRoutes);

// Conncecting backend to client side
app.use(express.static(path.join(__dirname, "client", "build")));

// A "catchall" route handler, in case API requests don't work.
// This means that the user will receive the website instead of an error message.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Starting the server
app.listen(port, () => {
  console.log(`App is running at ${port}`);
});
