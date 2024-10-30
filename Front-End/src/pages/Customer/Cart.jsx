import React from 'react';
import './Cart.css'; // Ensure to add your CSS styles here

const Cart = ({ cartItems, onContinue }) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <div className="cart-item">
        <h3>Selected Items</h3>
        <ul>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <li key={index}>
                <strong>Entree:</strong> {item.entree || 'None selected'}
                <br />
                <strong>Sides:</strong> {item.sides.length > 0 ? item.sides.join(', ') : 'No sides selected'}
              </li>
            ))
          ) : (
            <li>No items in the cart</li>
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
