import React, { useState } from 'react';
import QuizzicalQuestionsList from './QuizzicalQuestionsList';
import './Quizzical.scss';

const Quizzical = () => {
  const [startGame, setStartGame] = useState(false);

  const handleClickStartGame = () => {
    setStartGame(true);
  }

  return (
    <div className="quizzical">
      <div className="container">
        {
          startGame ? (
            <QuizzicalQuestionsList />
          ) : (
            <div className="quizzical__start-game">
              <h1 className="quizzical__title">
                Quizzical
              </h1>
              <p className="quizzical__text">
                Test your knowledge by answering random questions. Have fun :)
              </p>

              <button className="btn btn__quizzical btn__start-game" onClick={handleClickStartGame}>Start quiz</button>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Quizzical;