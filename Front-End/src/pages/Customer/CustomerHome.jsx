import React, { useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ContrastIcon from '@mui/icons-material/Contrast';
import TextIncreaseIcon from '@mui/icons-material/TextIncrease';
import GTranslateIcon from '@mui/icons-material/GTranslate';

// Internal Dependencies
import LandingPageButton from '../../components/Customer/LandingPageButton';
import './CustomerHome.css';

function CustomerHome() {
  const [style, setStyle] = useState({
    textColor: '#FFFFFF',
    buttonBackground: '#000000',
  });

  const [isHighContrastMode, setIsHighContrast] = useState(false);

  // Toggle between default and high-contrast mode
  const toggleContrast = () => {
    setIsHighContrast(!isHighContrastMode);

    // Update styles based on the contrast mode
    if (!isHighContrastMode) {
      setStyle({
        textColor: '#1AEBFF',
        buttonBackground: '#FFFFFF', // Yellow for high contrast
      });
    } else {
      setStyle({
        textColor: '#FFFFFF',
        buttonBackground: '#000000', // Reset to default
      });
    }
  };

  const toggleIncreaseText = () => {

  }

  const toggleTranslate = () => {

  }

  return (
    <div className="grid grid-cols-2 w-full h-full gap-4">
      <div className='flex justify-center items-center'>
        <button
          className={`start-order-button w-4/5 h-4/5 p-4 rounded-lg flex flex-col justify-center items-center gap-2`}
          style={{ backgroundColor: style.buttonBackground }}
        >
          <AddShoppingCartIcon className = "shopping-cart" style={{ color: style.textColor }} />
          <h1
            style={{ color: style.textColor }}
          >
            START ORDER
          </h1>
        </button>
      </div>
      <div className='flex justify-center items-center '>
        <ul className='grid grid-cols-1 gap-8'>
          <li>
            <LandingPageButton label='Change Language' Icon={GTranslateIcon} style = {style} onClick = {toggleTranslate} />
          </li>
          <li>
            <LandingPageButton label = {"High-contrast mode"} Icon = {ContrastIcon} style = {style} onClick = {toggleContrast}/>
          </li>
          <li>
            <LandingPageButton label = {"Enlarge Text"} Icon = {TextIncreaseIcon} style = {style} onClick = {toggleIncreaseText}/>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CustomerHome;
