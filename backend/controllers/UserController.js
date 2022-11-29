const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    const token = jwt.sign(
      { user_id: user._id, email: user.email },
      process.env.TOKEN_KEY,
      { expiresIn: "2h" }
    );

    user.token = token;

    res.status(201).json({
      status: "success",
      user,
    });
  } catch (err) {
    let error = err;
    if (err.code === 11000) {
      error = "Bu mail adresi sistemde kayıtlı.";
    }
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      bcrypt.compare(password, user.password, (err, same) => {
        if (same) {
          const token = jwt.sign(
            { user_id: user._id, email: user.email },
            process.env.TOKEN_KEY,
            { expiresIn: "2h" }
          );

          user.token = token;

          res.status(200).json({ status: "success", user });
        } else {
          res
            .status(400)
            .json({ status: "fail", error: "Your password is not valid." });
        }
      });
    } else {
      res
        .status(400)
        .json({ status: "fail", error: "Your e-mail is not valid." });
    }
  } catch (err) {
    res.status(400).json({ status: "fail", error: err });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.user_id });

    if (user) {
      res.status(200).json({
        status: "success",
        user: {
          name: user.name,
          surname: user.surname,
          email: user.email,
          address: user.address,
        },
      });
    } else {
      res.status(400).json({ status: "fail", error: "Kullanıcı bulunamadı." });
    }
  } catch (err) {
    res.status(400).json({ status: "fail", error: err });
  }
};

exports.changePassword = async (req, res) => {
  const userId = req.user.user_id;
  const user = await User.findOne({ _id: userId });
  const { password, newPassword } = req.body;

  if (user) {
    bcrypt.compare(password, user.password, async (err, same) => {
      if (same) {
        user.password = newPassword;
        await user.save();

        res.status(200).json({
          status: "success",
          message: "Şifreniz başarıyla değiştirildi.",
        });
      } else {
        res
          .status(400)
          .json({ status: "fail", error: "Mevcut şifreniz yanlış." });
      }
    });
  } else {
    res.status(400).json({ status: "fail", error: "Kullanıcı bulunamadı." });
  }
};

exports.changeMail = async (req, res) => {
  const user = await User.findOne({ _id: req.user.user_id });
  const { email } = req.body;

  if (user) {
    user.email = email;
    user.save();
    
    res.status(200).json({
      status: "success",
      message: "Mail adresiniz başarıyla değiştirildi.",
    });
  } else {
    res.status(400).json({ status: "fail", error: "Kullanıcı bulunamadı." });
  }
};
