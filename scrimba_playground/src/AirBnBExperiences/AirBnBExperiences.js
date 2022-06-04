import React from 'react';
import AirBnBExperiencesNav from './AirBnBExperiencesNav';
import AirBnBExperiencesHero from './AirBnBExperiencesHero';
import './AirBnBExperiences.scss';
import AirBnBExperiencesCardItems from './AirBnBExperiencesCardItems';

const AirBnBExperiences = () => {
  return (
    <div className='air-bnb'>
      <AirBnBExperiencesNav />
      <AirBnBExperiencesHero />
      <AirBnBExperiencesCardItems />
    </div>
  )
}

export default AirBnBExperiences;