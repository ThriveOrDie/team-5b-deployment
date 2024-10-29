import React from 'react';
import PropTypes from 'prop-types';

function LandingPageButton({ label, Icon, style, onClick }) {
  return (
    <button
      onClick={onClick}
      className="landing-page-button p-8 rounded-lg flex justify-center items-center gap-8"
      style={{ backgroundColor: style.buttonBackground }}
    >
      {Icon && <Icon style={{ color: style.textColor }} />}
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
