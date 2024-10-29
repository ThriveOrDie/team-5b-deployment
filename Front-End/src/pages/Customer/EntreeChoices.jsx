import React, { useState } from 'react';
import './EntreeChoices.css'; // Add your CSS styles here

const EntreeChoices = ({ entrees, selectedEntree, onSelectEntree }) => {
  return (
    <div className="entree-choices">
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
    </div>
  );
};

export default EntreeChoices;
