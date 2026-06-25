const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({

    tourName: {
        type: String,
        required: true
    },

    destination: {
        type: String,
        required: true
    },

    duration: {
        type: Number,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    availableSeats: {
        type: Number,
        required: true
    },

    startDate: {
        type: Date,
        required: true
    }

});

module.exports = mongoose.model("Tour", tourSchema);