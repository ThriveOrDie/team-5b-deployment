import React from 'react';
import './Cart.css'; // Add your CSS styles here

const Cart = ({ selectedEntree, selectedSides }) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <div className="cart-item">
        <p>Selected Entree: {selectedEntree || 'None'}</p>
        <p>Selected Sides: {selectedSides.length > 0 ? selectedSides.join(', ') : 'None'}</p>
      </div>
    </div>
  );
};

export default Cart;
