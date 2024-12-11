import React, { useState, useEffect } from 'react';
import { getText, deleteText } from './api/api';
import OptionForm from './components/OptionForm';
import OptionList from './components/OptionList';

const App = () => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const fetchOptions = async () => {
      const data = await getText();
      setOptions(data);
    };
    fetchOptions();
  }, []);

  const handleDelete = async (id) => {
    await deleteText(id);
    setOptions(options.filter((option) => option._id !== id)); // Update state after deletion
  };

  const handleSave = () => {
    setSelectedOption(null);
    getText().then(setOptions); // Refresh the list of options after save
  };

  const handleSelect = (option) => {
    setSelectedOption(option); // Set the selected option for editing
  };

  return (
    <div>
      <OptionForm selectedOption={selectedOption} onSave={handleSave} />
      <OptionList options={options} onDelete={handleDelete} onSelect={handleSelect} />
    </div>
  );
};

export default App;
