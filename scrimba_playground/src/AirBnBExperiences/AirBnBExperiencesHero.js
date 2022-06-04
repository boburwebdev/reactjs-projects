import React from 'react';
import airBnBHero from './img/hero-img-2x.png';

const AirBnBExperiencesHero = () => {
  return (
    <div className='air-bnb__hero'>
      <div className="container">
        <div className="air-bnb__hero-inner">
          <div className="air-bnb__hero-img__wrapper">
            <img className="air-bnb__hero-img__item"  src={airBnBHero} alt="hero"/>
          </div>
          <div className="air-bnb__hero-desc">
            <h1 className="air-bnb__hero-title">
              Online Experiences
            </h1>
            <p className="air-bnb__hero-text">
              Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AirBnBExperiencesHero;