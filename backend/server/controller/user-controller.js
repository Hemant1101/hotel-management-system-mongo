const User = require("../models/User");
const Rooms = require("../models/Rooms");
const { bulkBuild } = require("../models/User");

const register = async (req, res) => {
  try {
    const { name, email, password, phonenumber } = req.body;
    const user = new User({ name, email, password, phonenumber });
    await user.save();
    return res
      .status(200)
      .json({ status: 200, message: "Registration completed" });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, message: "Internal server problem" });
  }
};

const login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({
      email: email,
      password: password,
    });
    if (!user) {
      return res.status(400).json({ status: 200, message: "Email not found" });
    }
    return res.status(200).json({ user: user });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, message: "Internal server problem" });
  }
};
// ("/api/rooms",
const getrooms = async (req, res) => {
  try {
    const rooms = await Rooms.find();
    res.status(200);
    return res.status(200).json({ rooms: rooms });
  } catch (error) {
    return res.status(500).json({
      staus: 500,
      message: [
        {
          id: 1,
          type: "server error",
          price: "####",
          totalrooms: 0,
          availrooms: 0,
          imgpath: "https://nomedia.com",
        },
      ],
    });
  }
};

const getuserdata = async (req, res) => {
  try {
    const usid = req.query.searchid;
    const usersdata = await User.findOne({ _id: usid });
    res.status(200);
    // console.log(usersdata);
    return res.status(200).json({ user: usersdata });
  } catch (error) {
    return res.status(500).json({ message: "userdata not found" });
  }
};

const getroomdata = async (req, res) => {
  try {
    const usid = req.query.searchid;
    const roomsdata = await Rooms.findOne({ type: usid });
    res.status(200);
    return res.status(200).json({ rooms: roomsdata });
  } catch (error) {
    return res.status(500).json({ message: "roomsdata not found" });
  }
};

const getroomtypedata = async (req, res) => {
  try {
    const roomsdata = await Rooms.find({}).select('type');
    res.status(200);
    return res.status(200).json({ rooms: roomsdata });
  } catch (error) {
    return res.status(500).json({ message: "roomsdata not found" });
  }
};

const updateroomdata = async (req, res) => {
  try {
    const usid = req.body.id;
    const roomtype = req.body.roomtype;
    const checkin = new Date(req.body.checkin);
    const checkout = new Date(req.body.checkout);
    const roombooked = req.body.roombooked;
    const leftrooms = req.body.leftrooms;
    const bill = req.body.bill;
    await User.findOneAndUpdate(
      { _id: usid },
      {
        checkin: checkin,
        checkout: checkout,
        bookedrooms: { type: roomtype, no_of_rooms: roombooked },
        totalbill: bill,
        paidbill: bill,
      }
    );
    await Rooms.findOneAndUpdate({ type: roomtype }, { availrooms: leftrooms });
    return res.status(200).json({ message: "room booked successfully" });
  } catch (error) {
    console.log("\n" + error);
    return res.status(500).json({ message: "roomsdata not found" });
  }
};

module.exports = {
  register,
  login,
  getrooms,
  getuserdata,
  getroomdata,
  getroomtypedata,
  updateroomdata,
};
