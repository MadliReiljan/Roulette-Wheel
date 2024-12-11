import React from 'react';

const OptionList = ({ options, onDelete, onSelect }) => {
  const listStyle = {
    listStyleType: 'none',
    padding: 0,
  };

  const itemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #ccc',
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: '10px',
  };

  const textStyle = {
    fontSize: '18px', 
  };

  const buttonStyle = {
    padding: '5px 10px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div>
      <h2>List of given options</h2>
      <ul style={listStyle}>
        {options.map((option) => (
          <li key={option._id} style={itemStyle}>
           <span style={textStyle}>{option.text}</span>
            <div style={buttonContainerStyle}>
              <button style={buttonStyle} onClick={() => onSelect(option)}>Edit</button>
              <button style={buttonStyle} onClick={() => onDelete(option._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OptionList;
