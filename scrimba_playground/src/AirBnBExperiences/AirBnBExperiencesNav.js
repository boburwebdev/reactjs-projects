import React from 'react';
import airBnbLogo from './img/logo-airbnb.svg';

const AirBnBExperiencesNav = () => {
  return (
    <nav className='air-bnb__nav'>
      <div className="container">
        <img className="air-bnb__nav-logo-img" src={airBnbLogo} alt="logo" />
      </div>
    </nav>
  )
}

export default AirBnBExperiencesNav;