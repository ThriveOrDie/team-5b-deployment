import React from 'react';
import './Cart.css'; // Ensure to add your CSS styles here

const Cart = ({ selectedEntree, selectedSides, onContinue }) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <div className="cart-item">
        <h3>Selected Items</h3>
        <ul>
          {selectedEntree ? (
            <li>
              <strong>Entree:</strong> {selectedEntree}
            </li>
          ) : (
            <li><strong>Entree:</strong> None selected</li>
          )}
          {selectedSides.length > 0 ? (
            <>
              <strong>Sides:</strong>
              <ul>
                {selectedSides.map((side, index) => (
                  <li key={index}>{side}</li>
                ))}
              </ul>
            </>
          ) : (
            <li>No sides selected</li>
          )}
        </ul>
      </div>
      <button className="checkout-button" onClick={onContinue}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
