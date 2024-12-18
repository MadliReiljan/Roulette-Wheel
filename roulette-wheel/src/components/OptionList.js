const OptionList = ({ options, onDelete, onSelect }) => {
  const truncateText = (text) => {
    return text.length > 20 ? text.slice(0, 20) + '...' : text;
  };

  const containerStyle = {
    maxHeight: '200px',
    overflowY: 'auto',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
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
    margin: '0px 5px 0px 0px',
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
    margin: '0px 0px 0px 5px',
  };

  return (
    <div>
      <h2>List of given options</h2>
      <div style={containerStyle}>
        <ul style={listStyle}>
          {options.map((option) => (
            <li key={option._id} style={itemStyle}>
              <span style={textStyle}>{truncateText(option.text)}</span>
              <div style={buttonContainerStyle}>
                <button style={buttonStyle} onClick={() => onSelect(option)}>Edit</button>
                <button style={buttonStyle} onClick={() => onDelete(option._id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OptionList;
