import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti'
import { getNewDice, getRandomNumber } from './TenziesHelpers';
import TenziesDie from './TenziesDie';

import './Tenzies.scss';

const Tenzies = () => {
  const [dice, setDice] = useState(getNewDice());
  const [isWon, setIsWon] = useState(false);

  useEffect(() => {
    if (dice.every(die => die.isFrozen) && dice.every(die => die.value === dice[0].value)) {
      setIsWon(true);
    }
  }, [dice]);

  useEffect(() => {
    if (isWon) {
      setDice(prevDice => prevDice.map(die => ({ ...die, isDisabled: true })));
    }
  }, [isWon]);

  const handleDieClick = id => {
    setDice(prevDice => prevDice.map(die => die.id === id ? { ...die, isFrozen: !die.isFrozen } : die));
  }

  const dieElements = dice.map(die => {
    return <TenziesDie 
              key={die.id}
              dieId={die.id}
              isFrozen={die.isFrozen}
              value={die.value}
              clicked={handleDieClick}
              isDisabled={die.isDisabled}
            />
  });

  const handleClickRoll = () => {
    setDice(prevDice => {
      return prevDice.map(die => die.isFrozen ? die : { ...die, value: getRandomNumber() });
    });
  }

  const handleClickNewGame = () => {
    setDice(getNewDice());
    setIsWon(false);
  }

  const textToShow = isWon ? (
    <>
      <h1 className="tenzies__title tenzies__title--win">You have just won, Congratulations!!!</h1>
    </>
  ) : (
    <>
      <h1 className="tenzies__title">Tenzies</h1>
      <p className="tenzies__text">
        Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
      </p>
    </>
  );

  return (
    <div className="tenzies">
      <div className="tenzies__inner">
        { isWon && <Confetti />}
        {
          textToShow
        }
        <div className="tenzies__dice-items">
          {
            dieElements
          }
        </div>

        {
          isWon ? (
            <button className="tenzies__btn" onClick={handleClickNewGame}>New Game</button>
          ) : (
            <button className="tenzies__btn"  onClick={handleClickRoll}>Roll</button>
          )
        }
      </div>
    </div>
  )
}

export default Tenzies;