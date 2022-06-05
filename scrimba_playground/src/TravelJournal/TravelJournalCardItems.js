import React from 'react';
import TravelJournalCard from './TravelJournalCard';
import TravelJournalData from './TravelJournalData';

const TravelJournalCardItems = () => {
  const cardItems = TravelJournalData.map(data => {
    return <TravelJournalCard 
              key={data.id}
              {...data}
            />
  })

  return (
    <div className='travel-journal__content'>
      <div className="container">
        {cardItems}
      </div>
    </div>
  )
}

export default TravelJournalCardItems;