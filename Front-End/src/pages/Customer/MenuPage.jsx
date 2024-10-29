import React, { useState } from 'react';
import MenuItem from './MenuItem';
import SideChoices from './SideChoices';
import EntreeChoices from './EntreeChoices'; // Import the new component
import './MenuPage.css';

function MenuPage({ setShowSidebar }) {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [sides] = useState(['Chow Mein', 'Fried Rice', 'White Rice', 'Super Greens']);
  const [selectedEntree, setSelectedEntree] = useState(null);
  const [sidesSelected, setSidesSelected] = useState(false);

  const menuItems = [
    { name: 'Bowl', description: 'Choose 1 entree and 1 side', image: '/images/bowl.jpg', maxSides: 1 },
    { name: 'Plate', description: 'Choose 2 entrees and 1 side', image: '/images/plate.jpg', maxSides: 1 },
    { name: 'Bigger Plate', description: 'Choose 3 entrees and 1 side', image: '/images/bigger-plate.jpg', maxSides: 1 },
    { name: 'A La Carte', description: 'Order entrees or sides individually', image: '/images/a-la-carte.jpg', maxSides: 3 },
    { name: 'Panda Bundle', description: 'Family-style bundle for group dining', image: '/images/panda-bundle.jpg', maxSides: 3 },
  ];

  const entrees = [
    'Orange Chicken', 'Teriyaki Chicken', 'Bourbon Chicken', 
    'Sweetfire Chicken', 'Firecracker Shrimp', 
    'Honey Walnut Shrimp', 'Kung Pao Chicken', 
    'Beijing Beef', 'Broccoli Beef', 'Mushroom Chicken'
  ];

  const handleMenuItemClick = (item) => {
    setSelectedMenuItem(item);
    setSelectedEntree(null);
    setSidesSelected(false);
  };

  const handleContinue = () => {
    setSidesSelected(true);
    console.log("Sides selected. Ready to choose entrees.");
  };

  return (
    <div className="menu-page">
      {setShowSidebar && (
        <div className="menu-sidebar">
          <h2>Menu Items</h2>
          <div className="menu-items-scroll">
            {menuItems.map((item, index) => (
              <MenuItem 
                key={index} 
                name={item.name} 
                description={item.description} 
                image={item.image} 
                onClick={() => handleMenuItemClick(item)} 
              />
            ))}
          </div>
        </div>
      )}
      <div className="menu-main-content">
        {selectedMenuItem ? (
          <div>
            {!sidesSelected ? (
              <SideChoices 
                sides={sides} 
                maxSides={selectedMenuItem.maxSides}
                onContinue={handleContinue} 
              />
            ) : (
              <EntreeChoices 
                entrees={entrees} 
                selectedEntree={selectedEntree} 
                onSelectEntree={setSelectedEntree} 
              />
            )}
          </div>
        ) : (
          <h1>Select a Menu Item</h1>
        )}
      </div>
    </div>
  );
}

export default MenuPage;
