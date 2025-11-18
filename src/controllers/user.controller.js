const userService = require("../services/user.service");

exports.getAllUsers = (req, res) => {
  res.json(userService.getAllUsers());
};

exports.createUser = (req, res) => {
  try {
    const user = userService.createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
