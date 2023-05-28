import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../Components/css/quiz.css';
import MainLayout from '../Layout/MainLayout';

function Quiz() {
  const [timeRemaining, setTimeRemaining] = useState(60); // 1 minute = 60 seconds
  const [timerActive, setTimerActive] = useState(false);

  const [userData, setUserData] = useState('');
  useEffect(() => {
    fetch('http://localhost:4000/userdata', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        token: window.localStorage.getItem('token'),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, 'UserData');
        setUserData(data.data);
      });
  }, []);

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();

  const courseId = searchParams.get("course_id");

   
  // Timer-related effect
  useEffect(() => {
    if (!timerActive || showScore) {
      return;
    }

    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    if (timeRemaining <= 0) {
      setShowScore(true);
      updateMarksOnServer();
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [timerActive, timeRemaining, showScore]);

  useEffect(() => {
    if (questions.length > 0) {
      setTimerActive(true);
    }
  }, [questions]);

  useEffect(() => {
    fetch(`http://localhost:5000/data?course_id=${courseId}`)
      .then((res) => res.json())
      .then((data) => {
        const fetchedQuestions = data.map((question) => {
          return {
            question: question.question,
            answers: [
              { text: question.answers[0].text, correct: question.answers[0].correct },
              { text: question.answers[1].text, correct: question.answers[1].correct },
              { text: question.answers[2].text, correct: question.answers[2].correct },
              { text: question.answers[3].text, correct: question.answers[3].correct },
            ],
          };
        });
        setQuestions(fetchedQuestions);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });
  }, []);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      updateMarksOnServer();
    }
  };

  const updateMarksOnServer = () => {
    const dummyUsername = userData.email;
    const marks = score;
    const cid = courseId;
    const url = `http://localhost:5000/updateMarks?name=${dummyUsername}&marks=${marks}&cid=${cid}`;

    fetch(url, { method: 'POST' })
      .then((res) => {
        // Handle the response if necessary
      })
      .catch((error) => {
        console.error("Error updating marks:", error);
      });
  };

  const handleRestartButtonClick = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  };

  const handleExitButtonClick = () => {
    window.close();
  };

  return (
    <MainLayout>
      <div className="quiz">
        <div className="timer">
          Time Remaining: {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}
          </div>
              {showScore ? (
                <div className="score-section">
                  <h2>Quiz Results</h2>
                  <p>You scored {score} out of {questions.length}.</p>
                  <p>
                    {score === questions.length
                      ? "Congratulations! You got all the questions right!"
                      : score >= questions.length / 2
                      ? "Well done! You got more than half the questions right."
                      : "Oops, you didn't get many questions right."}
                  </p>
                  <div className="button-section">
                    <button onClick={handleRestartButtonClick}>Restart Quiz</button>
                    <button onClick={handleExitButtonClick}>Exit Quiz</button>
                  </div>
                </div>
              ) : questions.length > 0 ? (
                <>
                  <div className="question-section">
                    <div className="question-count">
                      <span>Question {currentQuestion + 1}</span>/{questions.length}
                    </div>
                    <div className="question-text">
                      {questions[currentQuestion].question}
                    </div>
                  </div>
                  <div className="answer-section">
                    {questions[currentQuestion].answers.map((answer) => (
                      <button
                        key={answer.text}
                        onClick={() => handleAnswerButtonClick(answer.correct)}
                      >
                        {answer.text}
                      </button>
                    ))}
                  </div>
                </>
              ) : (
            <div>Loading questions...</div>
          )}
        </div>
    </MainLayout>
  );
}

export default Quiz;
