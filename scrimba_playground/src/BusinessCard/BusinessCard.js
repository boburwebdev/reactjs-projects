import React from 'react';
import BusinessCardAbout from './BusinessCardAbout';
import BusinessCardFooter from './BusinessCardFooter';
import BusinessCardInfo from './BusinessCardInfo';
import BusinessCardInterests from './BusinessCardInterests';
import './BusinessCard.scss';

const BusinessCard = () => {
  return (
    <div className="business_card__wrapper">
      <div className='business_card__item'>
        <BusinessCardInfo />
        <BusinessCardAbout />
        <BusinessCardInterests />
        <BusinessCardFooter />
      </div>
    </div>
  )
}

export default BusinessCard;