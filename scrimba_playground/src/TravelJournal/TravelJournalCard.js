import React from 'react';
import iconMapMarker from './img/icon-map-marker.svg';

const TravelJournalCard = (props) => {
  const { title, location, googleMapsUrl, startDate, endDate, description, imageUrl } = props;

  return (
    <div className='travel-journal__card'>
      <div className="travel-journal__card-img__wrapper">
        <img className="travel-journal__card-img__item" src={imageUrl} alt={title} />
      </div>

      <div className="travel-journal__card-info">

        <div className="travel-journal__card-info__top">
          <div className="travel-journal__card-info__location">
            <img className="travel-journal__card-info__location-icon" src={iconMapMarker} alt="marker" />
            {location}
          </div>

          <a className="travel-journal__card-info__map-link" href={googleMapsUrl}>View on Google Maps</a>
        </div>

        <h3 className="travel-journal__card-info__title">
          {title}
        </h3>

        <div className="travel-journal__card-info__dates">
          {startDate} - {endDate}
        </div>

        <p className="travel-journal__card-info__desc">
          {description}
        </p>
      </div>

    </div>
  )
}

export default TravelJournalCard;