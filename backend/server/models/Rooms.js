const mongoose = require("mongoose");

const Roomsmodel = new mongoose.Schema({
    type: {
        type: String,
    },
    price: {
        type: Number,
    },
    totalrooms: {
        type: Number,
    },
    availrooms: {
        type: Number,
    },
    imgpath: {
        type: String,
    },
});

const Rooms = module.exports = mongoose.model("rooms", Roomsmodel);
