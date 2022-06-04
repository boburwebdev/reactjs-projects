import React from 'react';
import AirBnbCardExperiencesCard from './AirBnBExperiencesCard';

import airBnBData from './AirBnBData';

const AirBnBCardExperiencesCardItems = () => {
  const experiences = airBnBData.map(data => {
    return <AirBnbCardExperiencesCard
            key={data.id} 
            {...data}
          />
  })

  return (
    <div className='air-bnb__cards'>
      <div className="container">
        <div className="air-bnb__cards-inner">
          { experiences }
        </div>
      </div>
    </div>
  )
}

export default AirBnBCardExperiencesCardItems;


/*
  --------------------------------------------
  Passing each property value separately
  --------------------------------------------

  <AirBnbCardExperiencesCard
    key={data.id} 
    openSpots={data.openSpots}
    imgSrc={data.coverImg}
    imgAltText={data.title}
    rating={data.stats.rating}
    votes={data.stats.reviewCount}
    location={data.location}
    title={data.title}
    price={data.price}
  />
  
*/

/*

  --------------------------------------------
  Hard coding all the values
  --------------------------------------------

  <AirBnbCardExperiencesCard 
    status="Sold Out"
    imgSrc={ExperienceOne}
    imgAltText="Life lessons with Katie Zaferes"
    rating={5.0}
    votes={6}
    location="USA"
    title="Life lessons with Katie Zaferes"
    price={136}
  />
  
  <AirBnbCardExperiencesCard 
    status="Online"
    imgSrc={ExperienceTwo}
    imgAltText="Learn wedding photography"
    rating={5.0}
    votes={30}
    location="USA"
    title="Learn wedding photography"
    price={125}
  />

  <AirBnbCardExperiencesCard 
    imgSrc={ExperienceThree}
    imgAltText="Group Mountain Biking"
    rating={4.8}
    votes={2}
    location="USA"
    title="Group Mountain Biking"
    price={50}
  />

*/