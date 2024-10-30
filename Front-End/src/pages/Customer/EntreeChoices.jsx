import React, { useState } from 'react';
import './EntreeChoices.css'; // Add your CSS styles here
import Cart from './Cart'; // Import the Cart component

const EntreeChoices = ({ entrees, selectedEntree, onSelectEntree, onContinue }) => {
  const [showCart, setShowCart] = useState(false); // State to toggle Cart visibility

  return (
    <div className="entree-choices">
      <h2>Select Your Entree</h2>
      <div className="entrees-list">
        {entrees.map((entree, index) => (
          <div
            key={index}
            className={`entree-item ${selectedEntree === entree ? 'selected' : ''}`}
            onClick={() => onSelectEntree(entree)} // Select the entree
          >
            {entree}
          </div>
        ))}
      </div>
      <button 
        className={`continue-button ${selectedEntree ? 'active' : ''}`} 
        onClick={selectedEntree ? onContinue : null} // Call onContinue when clicked
        disabled={!selectedEntree}
      >
        Continue to Cart
      </button>
    </div>
  );
};

export default EntreeChoices;
