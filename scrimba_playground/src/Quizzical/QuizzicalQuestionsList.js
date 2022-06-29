import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import QuizzicalQuestion from './QuizzicalQuestion';

const QuizzicalQuestionsList = () => {

  const [questions, setQuestions] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countCorrect, setCountCorrect] = useState(0);

  useEffect(() => {
    getQuestions();
  }, []);

  useEffect(() => {
    if (isSubmitted) {
      let countCorrectAnswers = 0;
      
      questions.forEach(question => question.answers.forEach(answer => {
        if (answer.isChosen && answer.answerText === question.correctAnswer) countCorrectAnswers++;
      }));

      setCountCorrect(countCorrectAnswers);
    } else {
      setCountCorrect(0);
    }
  }, [isSubmitted])

  const handleSelectedAnswer = (questionId, answerId) => {
    setQuestions(prevQuestions => prevQuestions.map(question => {
      if (question.questionId === questionId) {
        return {
          ...question,
          answers: question.answers.map(answer => answer.answerId === answerId ? 
                                          { ...answer, isChosen: true } : 
                                          { ...answer, isChosen: false })
        }
      }

      return question;
    }));
  }

  const questionElements = questions.map(question => {
    return <QuizzicalQuestion 
            key={question.questionId}
            questionId={question.questionId}
            questionText={question.questionText}
            answers={question.answers}
            selectedAnswer={handleSelectedAnswer}
          />
  });

  const handleClickSubmit = () => {
    setIsSubmitted(true);
    
    setQuestions(prevQuestions => prevQuestions.map(question => {
      return {
        ...question,
        answers: question.answers.map(answer => {
          if (answer.answerText === question.correctAnswer) {
            return { ...answer, isCorrect: true, isSubmitted: true }
          } else {
            return { ...answer, isSubmitted: true }
          }
        })
      }
    }));
  }

  const handleClickReset = () => {
    setIsSubmitted(false);
    getQuestions();
  }

  function getQuestions() {
    fetch(`https://opentdb.com/api.php?amount=5&type=multiple`)
      .then(res => res.json())
      .then(data => {
        // console.log(data.results);

        const results = data.results;
        
        const allQuestions = results.map(result => {
          const allAnswers = result.incorrect_answers.slice();
          
          allAnswers.splice(Math.floor(Math.random() * 4), 0, result.correct_answer);
          
          const questionObj = {
            questionId: nanoid(),
            questionText: result.question,
            correctAnswer: result.correct_answer,
            answers: allAnswers.map(answer => ({
              answerId: nanoid(),
              answerText: answer,
              isChosen: false,
              isSubmitted: false,
            })) 
          }

          return questionObj;
        });

        setQuestions(allQuestions);
      })
  }

  return (
    <div className="quizzical__questions-list">
      { questionElements }
      {
        isSubmitted ? (
          <div className="quizzical__questions-list__result">
            <p className="quizzical__questions-list__result-text">You scored {countCorrect} / 5 correct answers</p>
            <button className="btn btn__reset" onClick={handleClickReset}>Play again</button>
          </div>
        ) : (
          <div className="quizzical__questions-list__result">
            <button className="btn btn__submit" onClick={handleClickSubmit}>Check answers</button>
          </div>
        )
      }
    </div>
  )
}

export default QuizzicalQuestionsList;