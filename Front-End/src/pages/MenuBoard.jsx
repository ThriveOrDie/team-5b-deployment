import React from 'react';
import './MenuBoard.css';

const MenuBoard = () => {
  const menuItems = [
    { name: 'Bowl', description: '1 side, 1 entree', price: '8.30', image: '/path/to/bowl.jpg' },
    { name: 'Plate', description: '1 side, 2 entrees', price: '9.80', image: '/path/to/plate.jpg' },
    { name: 'Bigger Plate', description: '1 side, 3 entrees', price: '11.30', image: '/path/to/bigger-plate.jpg' },
    { name: 'A La Carte', description: '1 side/entree', price: '4.30', image: '/path/to/a-la-carte.jpg' },
    { name: 'Panda Bundle', description: '1 Bowl, Plate, or Bigger Plate with a Drink', price: '10.40+', image: '/path/to/panda-bundle.jpg' },
  ];

  const entrees = [
    { name: 'Orange Chicken', image: '/path/to/orange-chicken.jpg' },
    { name: 'Honey Walnut Shrimp', description: '(Premium 1.50)', image: '/path/to/honey-walnut-shrimp.jpg' },
    // Add other entrees here
  ];

  const sides = [
    { name: 'Chow Mein', image: '/path/to/chow-mein.jpg' },
    { name: 'Fried Rice', image: '/path/to/fried-rice.jpg' },
    { name: 'White Rice', image: '/path/to/white-rice.jpg' },
    { name: 'Super Greens', image: '/path/to/super-greens.jpg' },
  ];

  const appetizers = [
    { name: 'Chicken Egg Roll', price: '2.00', image: '/path/to/egg-roll.jpg' },
    { name: 'Veggie Spring Roll', price: '2.00', image: '/path/to/spring-roll.jpg' },
    { name: 'Cream Cheese Rangoon', price: '2.00', image: '/path/to/rangoon.jpg' },
    { name: 'Apple Pie', price: '2.00', image: '/path/to/apple-pie.jpg' },
  ];

  const drinks = [
    { name: 'Coke', price: '4.20', image: '/path/to/coke.jpg' },
    { name: 'Sprite', price: '2.10', image: '/path/to/sprite.jpg' },
    { name: 'Tea', price: '2.10', image: '/path/to/tea.jpg' },
  ];

  return (
    <div className="menu-board">
      <div className="column">
        <h2>Menu Items</h2>
        {menuItems.map((item, index) => (
          <div key={index} className="item">
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>${item.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="column">
        <h2>Entrees</h2>
        {entrees.map((item, index) => (
          <div key={index} className="item">
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="column">
        <h2>Sides</h2>
        {sides.map((item, index) => (
          <div key={index} className="item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>

      <div className="column">
        <h2>Appetizers</h2>
        {appetizers.map((item, index) => (
          <div key={index} className="item">
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
            </div>
          </div>
        ))}
        <h2>Drinks</h2>
        {drinks.map((item, index) => (
          <div key={index} className="item">
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuBoard;
