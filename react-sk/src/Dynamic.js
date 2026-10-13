import React, { useState } from 'react';
function Dynamic() {
  const [color, setColor] = useState("color");
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };
  return (
    <div 
      style={{ 
        backgroundColor: color, 
       textAlign:'center',
       padding:150

      }}
    >
      <div style={{ backgroundColor: 'rgba(156, 148, 148, 0.8)', padding: '20px', borderRadius: '8px' }}>
        <h3>Type a color name:</h3>
        <input 
          type="text" 
          value={color} 
          onChange={handleColorChange} 
          placeholder="red,   blue"
          style={{ padding: '8px', fontSize: '16px', width: '150px' }}
        />
        <p>Current Color: <h3>{color}</h3></p>
      </div>
    </div>
  );
}

export default Dynamic