const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const { signup, login, logout } = require("../controllers/userController");

// SIGN UP ( NEW USER )
router.post(
  "/signup",
  [
    check("name", "Your name should be at least 2 characters.").isLength({
      min: 2,
    }),
    check("email", "Email should be valid").isEmail(),
    check("password", "Password should be at least 6 characters").isLength({
      min: 6,
    }),
  ],
  signup
);

// LOG IN ( EXISTING USER )
router.post("/login", login);

// LOG OUT
router.get("/logout", logout);

module.exports = router;
