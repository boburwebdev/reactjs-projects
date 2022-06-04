import React from 'react';
import iconTwitter from './img/icon-twitter.svg';
import iconFacebook from './img/icon-facebook.svg';
import iconInstagram from './img/icon-instagram.svg';
import iconGithub from './img/icon-github.svg';

const BusinessCardSocialMedia = () => {
  return (
    <ul className="business_card__social-list">
      <li className="business_card__social-list__item">
        <a className="business_card__social-list__link" href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <img className="business_card__social-list__icon" src={iconTwitter} alt="twitter" />
        </a>
      </li>
      <li className="business_card__social-list__item">
        <a className="business_card__social-list__link" href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <img className="business_card__social-list__icon" src={iconFacebook} alt="facebook" />
        </a>
      </li>
      <li className="business_card__social-list__item">
        <a className="business_card__social-list__link" href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <img className="business_card__social-list__icon" src={iconInstagram} alt="instagram" />
        </a>
      </li>
      <li className="business_card__social-list__item">
        <a className="business_card__social-list__link" href="https://www.github.com" target="_blank" rel="noreferrer">
          <img className="business_card__social-list__icon" src={iconGithub} alt="github" />
        </a>
      </li>
    </ul>
  )
}

export default BusinessCardSocialMedia;