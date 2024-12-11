const mongoose = require('mongoose');

const wheelSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    }
});

const Wheel = mongoose.model('Wheel', wheelSchema);

module.exports = Wheel;
