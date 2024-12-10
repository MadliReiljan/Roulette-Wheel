const Wheel = require('../models/wheel');

// Simulate spinning the wheel
const spinWheel = async (req, res) => {
    try {
        const wheel = await Wheel.find(); // Fetch all wheel slots
        const randomIndex = Math.floor(Math.random() * wheel.length);
        const result = wheel[randomIndex];
        res.json({ success: true, result });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to spin the wheel.', error });
    }
};

// Populate the database with default wheel slots
const seedWheel = async (req, res) => {
    const defaultSlots = [
        { number: 0, color: 'Green' },
        { number: 1, color: 'Red' },
        { number: 2, color: 'Black' },
        { number: 3, color: 'Red' },
        { number: 4, color: 'Black' },
    ];

    try {
        await Wheel.deleteMany({});
        const insertedSlots = await Wheel.insertMany(defaultSlots);
        res.json({ success: true, insertedSlots });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to seed the wheel.', error });
    }
};

module.exports = { spinWheel, seedWheel };
