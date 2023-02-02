const User = require("../models/user");

const getData = async (req, res) => {
  const { email } = req.params;
  const userData = await User.find({ email: email });

  if (userData.length === 0) {
    return res.status(400).json({
      msg: "Data not found",
    });
  }

  res.status(200).json(userData);
};

module.exports = { getData };
