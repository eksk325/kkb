const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
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

const port = process.env.PORT || 8000;

// Starting the server
app.listen(port, () => {
  console.log(`App is running at ${port}`);
});
