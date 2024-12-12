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
    padding: '12px',
    borderBottom: '1px solid #ccc',
     
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: '10px',
    margin: '0px 5px 0px 0px'
  };

  const textStyle = {
    fontSize: '18px', 
  };

  const buttonStyle = {
    padding: '8px 10px', 
    fontSize: '18px', 
    cursor: 'pointer',
    backgroundColor: '#007BFF', 
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 123, 255, 0.3)', 
    transition: 'background-color 0.3s, transform 0.2s, box-shadow 0.3s', 
    margin: '0px 0px 0px 5px'
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
