import React from 'react';
import QuizzicalAnswer from './QuizzicalAnswer';

const QuizzicalQuestion = ({ questionId, questionText, answers, selectedAnswer }) => {

  const handleAnswerClick = (questionId, answerId) => {
    selectedAnswer(questionId, answerId);
  }

  const answerElements = answers?.map(answer => {
    return <QuizzicalAnswer 
              key={answer.answerId}
              answerId={answer.answerId}
              answerText={answer.answerText}
              isChosen={answer.isChosen}
              isSubmitted={answer.isSubmitted}
              isCorrect={answer.isCorrect}
              handleAnswerClick={handleAnswerClick}
            />
  })

  return (
    <div className="quizzical__question" id={questionId}>
      <h3 className="quizzical__question-title">
        {
          questionText
        }
      </h3>

      <div className="quizzical__question-answers">
        {
          answerElements
        }
      </div>
    </div>
  )
}

export default QuizzicalQuestion;