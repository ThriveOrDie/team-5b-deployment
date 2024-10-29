import React from 'react';
import './EntreesPage.css';

const EntreesPage = ({ showSidebar }) => {
  const entrees = [
    'Orange Chicken', 'Teriyaki Chicken', 'Bourbon Chicken', 
    'Sweetfire Chicken', 'Firecracker Shrimp', 
    'Honey Walnut Shrimp', 'Kung Pao Chicken', 
    'Beijing Beef', 'Broccoli Beef', 'Mushroom Chicken'
  ];

  return (
    <div className="entrees-page">
      {showSidebar && (
        <div className="sidebar">
          <h2>Menu Items</h2>
          {/* Example of your menu items list */}
          <Link to="/menu">Bowl</Link>
          <Link to="/menu">Plate</Link>
          <Link to="/menu">Bigger Plate</Link>
          <Link to="/menu">A La Carte</Link>
          <Link to="/menu">Panda Bundle</Link>
        </div>
      )}
      <h2>Select Your Entree</h2>
      <div className="entrees-list">
        {entrees.map((entree, index) => (
          <div key={index} className="entree-item">
            {entree}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EntreesPage;
