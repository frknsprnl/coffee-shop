const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      status: "success",
      user,
    });
  } catch (err) {
    const error = err.message;
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
