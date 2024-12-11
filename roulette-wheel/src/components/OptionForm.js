import React, { useState, useEffect } from 'react';
import { createText, updateText } from '../api/api';

const OptionForm = ({ selectedOption, onSave }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (selectedOption) {
      setText(selectedOption.text); 
    }
  }, [selectedOption]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedOption) {
      await updateText(selectedOption._id, text);
    } else {
      await createText(text);
    }

    setText(''); 
    onSave(); 
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enter new option"
        required
        style={styles.input}
      />
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    maxWidth: '200px',
    margin: '0 auto',
    width: '100%',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    fontSize: '18px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  inputFocus: {
    borderColor: '#007BFF',
  },
};

export default OptionForm;
