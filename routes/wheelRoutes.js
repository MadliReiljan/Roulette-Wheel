const express = require('express');
const { createText, getText, updateText, deleteText } = require('../controllers/wheelController');
const router = express.Router();

router.post('/text', createText); 
router.get('/text', getText);   
router.put('/text/:id', updateText); 
router.delete('/text/:id', deleteText); 

module.exports = router;
