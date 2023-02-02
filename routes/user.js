const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const { signup, login, logout } = require("../controllers/userController");
const { getData } = require("../controllers/dataController");

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

router.get("/:email", getData);

module.exports = router;
