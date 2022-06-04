import React from 'react';
import iconStar from './img/icon-star.svg';

const AirBnBExperiencesCard = (props) => {
  const { title, description, price, coverImg, stats, location, openSpots } = props;

  return (
    <div className='air-bnb__card'>
      <div className="air-bnb__card-img">
        {
          openSpots === 0 ? (
            <div className="air-bnb__card-status">
              Sold Out
            </div>
          ) : location.toLowerCase() === 'online' ? (
            <div className="air-bnb__card-status">
              Online
            </div>
          ) : null
        }

        <div className="air-bnb__card-img__wrapper">
          <img className="air-bnb__card-img__item" src={coverImg} alt={title} />
        </div>
      </div>

      <div className="air-bnb__card-info">
        <div className="air-bnb__card-info__top">
          <img className="air-bnb__card-info__star-icon" src={iconStar} alt="star" />
          <span className="air-bnb__card-info__rating-average">{stats.rating?.toFixed(1)}</span>
          <span className="air-bnb__card-info__votes">({stats.reviewCount})</span>
          <span className="air-bnb__card-info__location">({location})</span>
        </div>

        <h3 className="air-bnb__card-info__title">
          {title}
        </h3>

        <div className="air-bnb__card-info__price">
          From ${price}
          <span className="air-bnb__card-info__price-subtext">/ person</span>
        </div>
      </div>

    </div>
  )
}

export default AirBnBExperiencesCard;