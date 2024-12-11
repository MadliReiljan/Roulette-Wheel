import React, { useState } from 'react';
import { createText, updateText } from '../api/api';

const OptionForm = ({ selectedOption, onSave }) => {
  const [optionText, setOptionText] = useState(selectedOption ? selectedOption.option : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedOption) {
      await updateText(selectedOption._id, optionText);
    } else {
      await createText(optionText);
    }
    onSave();
    setOptionText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={optionText}
        onChange={(e) => setOptionText(e.target.value)}
        placeholder="Enter option"
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default OptionForm;
