import React, { useState } from 'react';
import './SideChoices.css';

const SideChoices = ({ sides, maxSides, onContinue }) => {
  const [selectedSides, setSelectedSides] = useState([]);

  const toggleSide = (side) => {
    if (selectedSides.includes(side)) {
      setSelectedSides(selectedSides.filter(s => s !== side));
    } else {
      if (selectedSides.length < maxSides) {
        setSelectedSides([...selectedSides, side]);
      }
    }
  };

  const isContinueEnabled = selectedSides.length === maxSides;

  return (
    <div className="side-choices">
      <h2>Select Your Sides</h2>
      <div className="sides-list">
        {sides.map((side, index) => (
          <div 
            key={index} 
            className={`side-item ${selectedSides.includes(side) ? 'selected' : ''}`} 
            onClick={() => toggleSide(side)}
          >
            {side}
          </div>
        ))}
      </div>
      <button 
        className={`continue-button ${isContinueEnabled ? 'active' : ''}`} 
        onClick={isContinueEnabled ? onContinue : null}
        disabled={!isContinueEnabled}
      >
        Continue
      </button>
    </div>
  );
};

export default SideChoices;
