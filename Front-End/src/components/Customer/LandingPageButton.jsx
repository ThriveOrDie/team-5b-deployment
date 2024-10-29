import React from 'react';
import PropTypes from 'prop-types';

function LandingPageButton({ label, Icon, style, onClick }) {
  return (
    <button
      onClick={onClick}
      className="button p-4 rounded-lg flex items-center gap-2"
      style={{ backgroundColor: style.buttonBackground }}
    >
      {Icon && <Icon style={{ fontSize: '48px', color: style.textColor }} />}
      <h2 style={{ color: style.textColor }}>{label}</h2>
    </button>
  );
}

// Define prop types for LandingPageButton
LandingPageButton.propTypes = {
  label: PropTypes.string.isRequired,
  Icon: PropTypes.elementType, // Icon component
  style: PropTypes.shape({
    buttonBackground: PropTypes.string,
    textColor: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LandingPageButton;
