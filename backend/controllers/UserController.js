const User = require("../models/User");
const Cart = require("../models/Cart");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    const token = jwt.sign(
      { user_id: user._id, email: user.email },
      process.env.TOKEN_KEY,
      { expiresIn: "168h" }
    );

    user.token = token;

    res.status(201).json({
      status: "success",
      message: "Kaydınız başarıyla oluşturuldu.",
      token: user.token,
    });
  } catch (err) {
    let error = err;
    if (err.code === 11000) {
      error = "Bu mail adresi sistemde kayıtlı.";
    }
    res.status(400).json({
      status: "fail",
      message: error,
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
            { expiresIn: "168h" }
          );

          user.token = token;

          res.status(200).json({ status: "success", user });
        } else {
          res.status(400).json({ status: "fail", message: "Geçersiz şifre." });
        }
      });
    } else {
      res
        .status(400)
        .json({ status: "fail", message: "Geçersiz mail adresi." });
    }
  } catch (err) {
    res.status(400).json({ status: "fail", message: err });
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
          role: user.role,
        },
      });
    } else {
      res
        .status(400)
        .json({ status: "fail", message: "Kullanıcı bulunamadı." });
    }
  } catch (err) {
    res.status(400).json({ status: "fail", message: err });
  }
};

exports.changePassword = async (req, res) => {
  const userId = req.user.user_id;
  const user = await User.findOne({ _id: userId });
  const { password, newPassword } = req.body;

  if (user) {
    bcrypt.compare(password, user.password, async (err, same) => {
      if (same) {
        bcrypt.compare(newPassword, user.password, async (err, same) => {
          if (same) {
            res.status(400).json({
              status: "fail",
              message: "Bu şifreyi kullanıyorsunuz.",
            });
          } else {
            user.password = newPassword;
            await user.save();

            res.status(200).json({
              status: "success",
              message: "Şifreniz başarıyla değiştirildi.",
            });
          }
        });
      } else {
        res
          .status(400)
          .json({ status: "fail", message: "Mevcut şifreniz yanlış." });
      }
    });
  } else {
    res.status(400).json({ status: "fail", message: "Kullanıcı bulunamadı." });
  }
};

exports.changeMail = async (req, res) => {
  const user = await User.findOne({ _id: req.user.user_id });
  const { email } = req.body;

  await User.findOne({ email: email }).then((mailExists) => {
    if (user.email === email) {
      res.status(400).json({
        status: "fail",
        message: "Bu mail adresini kullanıyorsunuz.",
      });
    } else if (mailExists) {
      res.status(400).json({
        status: "fail",
        message: "Bu mail adresi sistemde kayıtlı.",
      });
    } else {
      if (user) {
        user.email = email;
        user.save();

        res.status(200).json({
          status: "success",
          message: "E-mail başarıyla değiştirildi.",
        });
      } else {
        res
          .status(400)
          .json({ status: "fail", message: "Kullanıcı bulunamadı." });
      }
    }
  });
};

exports.setAddress = async (req, res) => {
  const user = await User.findOne({ _id: req.user.user_id });
  const { address } = req.body;

  if (user) {
    if (user.address === address) {
      res.status(400).json({
        status: "fail",
        message: "Bu adresi kullanıyorsunuz.",
      });
    } else {
      if (!user.address) {
        await user.updateOne({ address: address });
        res.status(200).json({
          status: "success",
          message: "Adres başarıyla eklendi.",
        });
      } else {
        await user.updateOne({ address: address });
        res.status(200).json({
          status: "success",
          message: "Adres başarıyla değiştirildi.",
        });
      }
    }
  } else {
    res.status(400).json({ status: "fail", message: "Kullanıcı bulunamadı." });
  }
};

exports.getUsers = async (req, res) => {
  const user = await User.findOne({ _id: req.user.user_id });
  const users = await User.find({});

  if (user) {
    if (user.role === "admin") {
      res.status(200).json({ status: "success", users });
    } else {
      res
        .status(401)
        .json({ status: "fail", message: "İşlem için yetkiniz yok." });
    }
  } else {
    res.status(400).json({ status: "fail", message: "Kullanıcı bulunamadı." });
  }
};

exports.deleteUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.user_id });

  if (user) {
    if (user.role === "admin") {
      await User.findOneAndDelete({ _id: req.body._id }, async (err, user) => {
        if (err) {
          res.status(400).json({ status: "fail", error: err });
        } else {
          await Cart.findByIdAndDelete(user.cart);  
          res.status(200).json({ status: "success", message: "Kullanıcı silindi." });
        }
      });
    } else {
      res
        .status(401)
        .json({ status: "fail", message: "İşlem için yetkiniz yok." });
    }
  } else {
    res.status(400).json({ status: "fail", message: "Kullanıcı bulunamadı." });
  }
};
