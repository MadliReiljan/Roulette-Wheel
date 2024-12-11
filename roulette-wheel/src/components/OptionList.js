import React from 'react';
import { getOptions, deleteOption } from '../api/api';

const OptionList = ({ options, onDelete, onSelect }) => {
  return (
    <ul>
      {options.map((option) => (
        <li key={option._id}>
          {option.option}
          <button onClick={() => onSelect(option)}>Edit</button>
          <button onClick={() => onDelete(option._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default OptionList;
