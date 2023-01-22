const User = require("../models/user");
const { validationResult } = require("express-validator");
const user = require("../models/user");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

// SIGN UP (POST new user)
const signup = async (req, res) => {
  // Validation of user info
  console.log(req);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      msg: errors.array()[0].msg,
    });
  }

  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        msg: "Email already in use",
      });
    }

    return res.json({
      msg: "Success",
      user,
    });
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  // Checking if the email exists
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        msg: "Email not found",
      });
    }

    // Authenticate user
    if (!user.authenticate(password)) {
      return res.status(400).json({
        msg: "Email and password do not match",
      });
    }

    // Create a TOKEN
    const token = jwt.sign({ _id: user._id }, process.env.SECRET);

    // Put token into COOKIE (token expires in 1 day)
    res.cookie("token", token, { expire: new Date() + 1 });

    // Send response to frontend !
    const { _id, name, email } = user;
    return res.json({
      token,
      user: {
        _id,
        name,
        email,
      },
      msg: "Login was successful",
    });
  });
};

const logout = async (req, res) => {
  res.clearCookie("token");
  return res.json({
    msg: "Log out successful",
  });
};

module.exports = { signup, login, logout };
