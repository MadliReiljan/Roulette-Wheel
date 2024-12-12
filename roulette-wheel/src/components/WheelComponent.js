import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';

const WheelComponent = ({ options, onDelete }) => {
  const [mustSpin, setMustSpin] = useState(false);  
  const [prizeNumber, setPrizeNumber] = useState(0);  
  const [selectedOption, setSelectedOption] = useState('');  
  const [isWinnerSelected, setIsWinnerSelected] = useState(false);  

  const data = options?.map((option) => ({
    option: option.text,
    _id: option._id,  
  })) || [];

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);  
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);  
      setSelectedOption('');  
      setIsWinnerSelected(false); 
    }
  };

  const handleKeepClick = () => {
    setIsWinnerSelected(false); 
  };

  const handleRemoveClick = () => {
    onDelete(data[prizeNumber]._id);  
    setIsWinnerSelected(false);  
  };

  if (data.length === 0) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h3>Loading Wheel Data...</h3>
        <p>Please wait while we prepare the options for the wheel.</p>
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', marginRight: '60px' }}>
      <h2>Spin the Wheel!</h2>

      <div style={{ position: 'relative', display: 'inline-block',  }}>
        <Wheel
          mustStartSpinning={mustSpin}  
          prizeNumber={prizeNumber}  
          data={data}  
          backgroundColors={['#FEADCD', '#FFEC9E', '#7AE7B9', '#5bd2f0', '#b9acf2']}  
          textColors={['#000000']} 
          onStopSpinning={() => {
            setMustSpin(false);
            setSelectedOption(data[prizeNumber].option);  
            setIsWinnerSelected(true);  
          }} 
          spinDuration={1}  
          outerBorderColor='grey'  
          innerBorderColor='white'
          radiusLineColor='grey'
          radiusLineWidth={3}
          innerBorderWidth={3} 
          outerBorderWidth={3} 
        />

        {isWinnerSelected && (
          <div style={styles.announcment}>
            <div style={{fontWeight: 'bold'}}>We have a winner!</div>
            <div>{selectedOption}</div>
            <div style={styles.buttonContainer}>
              <button onClick={handleKeepClick} style={styles.button}>Keep</button>
              <button onClick={handleRemoveClick} style={styles.button}>Remove</button>
            </div>
          </div>
        )}
      </div>

      <div style={{ marginTop: '20px' }}>
        <button onClick={handleSpinClick} style={styles.button}>
          Spin
        </button>
      </div>
    </div>
  );
};

const styles = {
  announcment: {
    position: 'absolute',
    top: '50%', 
    left: '50%',
    transform: 'translate(-50%, -50%)', 
    padding: '10px 20px',
    backgroundColor: 'white',  
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '20px',
    zIndex: 10,
  },
  buttonContainer: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    marginTop: '10px'
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

export default WheelComponent;
