import React from 'react';
import profileImg from './img/profile-img.jpg';
import iconEnvelope from './img/icon-envelope.svg';
import iconLinkedin from './img/icon-linkedin.svg';
import './BusinessCard.scss';

const BusinessCardInfo = () => {
  return (
    <div className='business_card__info'>
      <div className="business_card__info-img__wrapper">
        <img className="business_card__info-img__item" src={profileImg} alt="profile img" />
      </div>

      <h3 className="business_card__info-name">
        Laura Smith
      </h3>

      <h4 className="business_card__info-position">
        Frontend Developer
      </h4>

      <div className="business_card__info-website">
        laurasmith.website
      </div>

      <div className="business_card__info-buttons">
        <a className="btn btn__white" href="#!">
          <img className="btn__icon" src={iconEnvelope} alt="envelope" />
          Email
        </a>
        <a className="btn btn__blue" href="#!">
          <img className="btn__icon" src={iconLinkedin} alt="linkedIn" />
          LinkedIn
        </a>
      </div>
    </div>
  )
}

export default BusinessCardInfo;