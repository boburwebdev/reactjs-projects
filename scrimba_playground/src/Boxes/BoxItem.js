import React from 'react';

const BoxItem = ({ boxId, isOn, toggleBoxState }) => {
  const handleBoxClick = () => {
    toggleBoxState(boxId)
  }

  return (
    <div 
      className={`boxes__item ${isOn ? "boxes__item--teal" : "boxes__item--tomato"}`}
      onClick={handleBoxClick}
      >
    </div>
  )
}

export default BoxItem;