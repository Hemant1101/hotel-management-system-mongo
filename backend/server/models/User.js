const mongoose = require("mongoose");

const Usersmodel = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  bookedrooms: {
    type: Object,
    required: false,
  },
  checkin: {
    type: Date,
    required: false,
  },
  checkout: {
    type: Date,
    required: false,
  },
  phonenumber: {
    type: String,
  },
  totalbill: {
    type: Number,
    required: false,
  },
  paidbill: {
    type: Number,
    required: false,
  },
  unpaidbill: {
    type: Number,
    required: false,
  },
});

const Users = module.exports = mongoose.model("users", Usersmodel);
