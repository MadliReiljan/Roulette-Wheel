import React from 'react';

const OptionList = ({ options, onDelete, onSelect }) => {
  return (
    <div>
      <h2>Options List</h2>
      <ul>
        {options.map((option) => (
          <li key={option._id}>
            {option.text}
            <button onClick={() => onSelect(option)}>Edit</button>
            <button onClick={() => onDelete(option._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OptionList;
