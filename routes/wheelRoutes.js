const express = require('express');
const { spinWheel, seedWheel } = require('../controllers/wheelController');

const router = express.Router();

router.get('/spin', spinWheel); 
router.post('/seed', seedWheel);

module.exports = router;
