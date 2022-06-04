import React from 'react';
import Joke from './Joke';
import JokesData from './JokesData';

import './Jokes.scss';

const Jokes = () => {
  const jokeItems = JokesData.map(j => {
    return (
      <Joke 
        setup = {j.setup}
        punchline = {j.punchline}
      />
    )
  });

  return (
    <div className='jokes'>
      <div className="container">
        <div className="jokes__inner">
          {
            jokeItems
          }
        </div>
      </div>
    </div>
  )
}

export default Jokes;