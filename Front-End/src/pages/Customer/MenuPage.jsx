import React, { useState } from 'react';

import MenuItem from './MenuItem';
import SideChoices from './SideChoices';
import './MenuPage.css';

function MenuPage({ setShowSidebar }) {  // Receive setShowSidebar as a prop
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [sides] = useState(['Chow Mein', 'Fried Rice', 'White Rice', 'Super Greens']);

  const menuItems = [
    { name: 'Bowl', description: 'Choose 1 entree and 1 side', image: '/images/bowl.jpg', maxSides: 1 },
    { name: 'Plate', description: 'Choose 2 entrees and 1 side', image: '/images/plate.jpg', maxSides: 1 },
    { name: 'Bigger Plate', description: 'Choose 3 entrees and 1 side', image: '/images/bigger-plate.jpg', maxSides: 1 },
    { name: 'A La Carte', description: 'Order entrees or sides individually', image: '/images/a-la-carte.jpg', maxSides: 3 },
    { name: 'Panda Bundle', description: 'Family-style bundle for group dining', image: '/images/panda-bundle.jpg', maxSides: 3 },
  ];

  const handleMenuItemClick = (item) => {
    setSelectedMenuItem(item);
  };

  const handleContinue = () => {
    setShowSidebar(false); // Hide sidebar when continuing to entrees
    console.log("Navigating to entrees page...");
    // You can add navigation logic here if using `useNavigate`
  };

  return (
    <div className="menu-page">
      {showSidebar && (
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
          <SideChoices 
            sides={sides} 
            maxSides={selectedMenuItem.maxSides}
            onContinue={handleContinue} 
          />
        ) : (
          <h1>Select a Menu Item</h1>
        )}
      </div>
    </div>
  );
}

export default MenuPage;
