import { nanoid } from 'nanoid';

export function getNewDice() {
  const arrDice = [...Array(10)].map(die => {
    return {
      id: nanoid(),
      value: getRandomNumber(),
      isFrozen: false,
      isDisabled: false
    }
  })
  
  return arrDice;
}

export function getRandomNumber () {
  return Math.ceil(Math.random() * 6);
}