require("dotenv").config();

const mongoose = require("mongoose");
//const { Schema } = require("zod");

mongoose.connect(process.env.DATABASE_URL);
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
});
const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, //reference to User model
    ref: "User",
    //it will help to have a balance schema of a person who exists in the database
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});
const Account = mongoose.model("Account", accountSchema);

const User = mongoose.model("User", userSchema);

module.exports = { User, Account };
