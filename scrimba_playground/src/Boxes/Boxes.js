import React, { useState } from 'react';
import boxesData from './BoxesData';
import BoxItem from './BoxItem';
import './Boxes.scss';

const Boxes = () => {
  const [boxes, setBoxes] = useState(boxesData);

  const toggleBoxState = id => {
    setBoxes(prevState => {
      return prevState.map(box => box.id === id ? { ...box, on: !box.on} : box);
    })
  }

  const boxItems = boxes.map(box => {
    return <BoxItem 
            key={box.id}
            boxId={box.id}
            isOn={box.on}
            toggleBoxState={toggleBoxState}
          />
  })

  return (
    <div className="boxes">
      <div className="container">
        <h1 className="boxes__title">Boxes Project</h1>

        <div className="boxes__inner">
          {boxItems}
        </div>
      </div>
    </div>
  )
}

export default Boxes;