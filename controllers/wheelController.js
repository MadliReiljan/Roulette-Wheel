const Wheel = require('../models/wheel');

const createText = async (req, res) => {
    const { text } = req.body;
    try{
        const newText = new Wheel({ text });
        await newText.save();
        res.status(201).json(newText);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getText = async (req, res) => {
    try {
      const text = await Wheel.find();
      res.status(200).json(text);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  const updateText = async (req, res) => {
    const { id } = req.params;
    const { text } = req.body;
    try {
      const updatedText = await Wheel.findByIdAndUpdate(id, { text }, { new: true });
      res.status(200).json(updatedText);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

  const deleteText = async (req, res) => {
    const { id } = req.params;
    try {
      const deletedText = await Wheel.findByIdAndDelete(id);
      if (!deletedText) {
        return res.status(404).json({ message: 'Text not found' });
      }
      res.status(200).json({ message: 'Text deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
 
  module.exports = {
    createText, getText, updateText, deleteText
  }