import React from 'react';
import iconGlobe from './img/icon-globe.svg';

const TravelJournalHeader = () => {
  return (
    <header className='travel-journal__header'>
      <div className="container">
        <div className="travel-journal__header-inner">
          <a className="travel-journal__header-link" href="#!">
            <img className="travel-journal__header-icon" src={iconGlobe} alt="globe" />
            My travel journal.
          </a>
        </div>
      </div>
    </header>
  )
}

export default TravelJournalHeader;