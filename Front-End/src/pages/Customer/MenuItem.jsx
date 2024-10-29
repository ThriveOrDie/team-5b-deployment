import React from 'react';
import './MenuItem.css';

function MenuItem({ name, description, image, onClick }) {
  return (
    <div className="menu-item" onClick={onClick}>
      <img src={image} alt={`${name}`} className="menu-item-image" />
      <div className="menu-item-info">
        <h3 className="menu-item-name">{name}</h3>
        <p className="menu-item-description">{description}</p>
      </div>
    </div>
  );
}

export default MenuItem;
