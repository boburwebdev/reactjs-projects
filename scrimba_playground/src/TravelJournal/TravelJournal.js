import React from 'react';
import './TravelJournal.scss';
import TravelJournalCardItems from './TravelJournalCardItems';
import TravelJournalHeader from './TravelJournalHeader';

const TravelJournal = () => {
  return (
    <div className='travel-journal'>
      <TravelJournalHeader />
      <TravelJournalCardItems />
    </div>
  )
}

export default TravelJournal;