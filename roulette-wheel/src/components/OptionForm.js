import React, { useState, useEffect } from 'react';
import { createText, updateText } from '../api/api';

const OptionForm = ({ selectedOption, onSave }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (selectedOption) {
      setText(selectedOption.text); // Pre-fill form if editing an option
    }
  }, [selectedOption]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedOption) {
      // If we are updating an existing option
      await updateText(selectedOption._id, text);
    } else {
      // If we are creating a new option
      await createText(text);
    }

    setText(''); // Clear the input
    onSave(); // Trigger the onSave callback to refresh the options list
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enter new option"
        required
      />
      <button type="submit">{selectedOption ? 'Update' : 'Add'} Option</button>
    </form>
  );
};

export default OptionForm;
