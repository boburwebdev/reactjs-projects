import React from 'react';

const Joke = ({ setup, punchline }) => {
  return (
    <div className='joke'>
      {
        setup ? (
          <div className="joke__setup">- {setup}</div>
        ) : null
      }
      <div className="joke__punchline">- {punchline}</div>
    </div>
  )
}

export default Joke;