import React, { useState, useEffect } from 'react';
import { getText, deleteText } from './api/api';
import OptionForm from './components/OptionForm';
import OptionList from './components/OptionList';
import WheelComponent from './components/WheelComponent';  

const App = () => {
  const [options, setOptions] = useState([]); 
  const [selectedOption, setSelectedOption] = useState(null); 
  const [mustSpin, setMustSpin] = useState(false);  

  useEffect(() => {
    const fetchOptions = async () => {
      const data = await getText(); 
      setOptions(data); 
    };
    fetchOptions();
  }, []); 


  const handleDelete = async (id) => {
    await deleteText(id); 
    setOptions(options.filter((option) => option._id !== id)); 
  };

  const handleSave = () => {
    setSelectedOption(null); 
    getText().then(setOptions);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', backgroundColor: '#FEADCD', minHeight: '100vh' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          border: '2px solid #ccc', 
          padding: '20px',
          width: '60rem',
          height: '40rem',
          borderRadius: '10px',
          backgroundColor: 'white'
        }}
      >

        <div>
          <WheelComponent
            mustSpin={mustSpin}
            options={options} 
            setMustSpin={setMustSpin} 
            onDelete={handleDelete} 
          />
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '10px',
          }}
        >
          <OptionForm selectedOption={selectedOption} onSave={handleSave} />
          <OptionList options={options} onDelete={handleDelete} onSelect={handleSelect} />
        </div>
      </div>
    </div>
  );
};

export default App;
