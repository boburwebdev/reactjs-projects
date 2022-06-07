import React, { useState } from 'react';
import './ThingsArray.scss';

const ThingsArray = () => {
  const [thingsArr, setThingsArr] = useState([]);

  const handleClick = () => {
    setThingsArr(prevThingsArr => [...prevThingsArr, `Thing ${prevThingsArr.length + 1}`]);
  }

  const thingsContent = thingsArr.map(thing => <p className="things-array__text" key={thing}>{thing}</p>)

  return (
    <div className="things-array">
      <div className="container">
        <div className="things-array__inner">
          <button className="btn" onClick={handleClick}>Add new thing</button>

          <div className="things-array__content">
            {
              thingsContent
            }
          </div>
        </div>
      </div>
    </div>
  )

}

export default ThingsArray;