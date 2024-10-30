import React, { useState } from 'react';
import './EntreeChoices.css'; // Add your CSS styles here
import Cart from './Cart'; // Import the Cart component

const EntreeChoices = ({ entrees, selectedEntree, onSelectEntree, selectedSides }) => {
  const [showCart, setShowCart] = useState(false); // State to toggle Cart visibility

  const handleContinue = () => {
    setShowCart(true); // Show the Cart when continue is clicked
  };

  return (
    <div className="entree-choices">
      {showCart ? (
        <Cart selectedEntree={selectedEntree} selectedSides={selectedSides} /> // Render Cart if showCart is true
      ) : (
        <>
          <h2>Select Your Entree</h2>
          <div className="entrees-list">
            {entrees.map((entree, index) => (
              <div
                key={index}
                className={`entree-item ${selectedEntree === entree ? 'selected' : ''}`}
                onClick={() => onSelectEntree(entree)}
              >
                {entree}
              </div>
            ))}
          </div>
          <button 
            className={`continue-button ${selectedEntree ? 'active' : ''}`} 
            onClick={selectedEntree ? handleContinue : null}
            disabled={!selectedEntree}
          >
            Continue to Cart
          </button>
        </>
      )}
    </div>
  );
};

export default EntreeChoices;
