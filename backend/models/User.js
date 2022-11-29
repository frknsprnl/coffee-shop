const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
    trim: true,
  },
  address: {
    type: String
  },
  password: {
    type: String,
    required: true,
  },
  token: {
    type: String,
  }
});

UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const user = this;
  bcrypt.hash(user.password, 10, (error, hash) => {
    user.password = hash;
    next();
  });

  this.name = user.name.charAt(0).toLocaleUpperCase() + user.name.slice(1).toLowerCase();
  this.surname = user.surname.charAt(0).toLocaleUpperCase() + user.surname.slice(1).toLowerCase();
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
