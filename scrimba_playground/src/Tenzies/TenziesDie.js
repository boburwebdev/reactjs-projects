import React from 'react';

const TenziesDie = ({ dieId, isFrozen, value, clicked, isDisabled }) => {
  const handleClick = () => {
    clicked(dieId);
  }

  return (
    <button 
      className={`tenzies__die ${isFrozen ? 'tenzies__die--frozen' : ''}`} 
      onClick={handleClick} 
      disabled={isDisabled}
      >
        {value}
    </button>
  )
}

export default TenziesDie;