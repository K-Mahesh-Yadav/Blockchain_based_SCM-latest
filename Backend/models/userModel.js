const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    unique: true,
  },
  Id: {
    type: String,
    unique: true,
  },
  Id1: Number,
  Password: String,
  Role: String,
  Account: {
    type: String,
    default: "acc",
  },
  Mobile: {
    type: String,
    unique: true
  }
},
  { collection: "Register" }
);


module.exports = mongoose.model("userSchema", userSchema);