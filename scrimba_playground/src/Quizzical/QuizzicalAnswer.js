import React from 'react';

const QuizzicalAnswer = ({ answerId, answerText, isChosen, isCorrect, isSubmitted, handleAnswerClick }) => {

  const handleClick = (e) => {
    const questionId = e.target.parentElement.parentElement.id;
    handleAnswerClick(questionId, answerId);
  }

  let secondaryClassName = ``;

  if (isChosen) {
    if (isSubmitted) {
      if (isCorrect) {
        secondaryClassName = `quizzical__answer--correct`;
      } else {
        secondaryClassName = `quizzical__answer--wrong`;
      }
    } else {
      secondaryClassName = `quizzical__answer--chosen`;
    }
  } else {
    if (isSubmitted && isCorrect) {
      secondaryClassName = `quizzical__answer--correct`;
    }
  }

  return (
    <div className={`quizzical__answer ${secondaryClassName}`} id={answerId} onClick={handleClick}>
      {answerText}
    </div>
  )
}

export default QuizzicalAnswer;