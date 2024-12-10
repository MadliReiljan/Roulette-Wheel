const mongoose = require('mongoose');

const wheelSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
});

const Wheel = mongoose.model('Wheel', wheelSchema);

module.exports = Wheel;
