import React, { useState, useEffect } from 'react';
import { createText, updateText } from '../api/api';

const OptionForm = ({ selectedOption, onSave }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (selectedOption) {
      setText(selectedOption.text); // Populate input with selected option text
    } else {
      setText(''); // Clear input when no option is selected
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

    setText(''); // Clear input after submit
    onSave(); // Notify parent component
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
      <button 
        type="submit" 
        style={styles.button}>
        {selectedOption ? 'Update' : 'Add'}
      </button>
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
    width: '90%',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    fontSize: '18px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    marginBottom: '10px',
  },
  button: {
    padding: '12px 24px',
    fontSize: '18px',
    cursor: 'pointer',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 123, 255, 0.3)',
    transition: 'background-color 0.3s, transform 0.2s, box-shadow 0.3s',
  },
};

export default OptionForm;
