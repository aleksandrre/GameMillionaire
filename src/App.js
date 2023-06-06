import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Timer from "./components/Timer";
import { data } from "./data";
function App() {
  const [question, setQuestion] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [timer, setTimer] = useState(30);
  const [state, setState] = useState(true);

  useEffect(() => {
    setQuestion(data[questionNumber]);
  }, [data, questionNumber]);

  const buttonClick = (e) => {
    e.target.classList.remove("itsname");
    console.log(e.target.classList);
    setState(false);
    const data2 = question?.answers.filter(
      (data) => data.text === e.target.textContent
    );
    if (data2[0].correct === true) {
      e.target.className = "checkanswer";
      setTimeout(() => {
        e.target.className = "";
      }, 2000);
      setTimeout(() => {
        e.target.className = "checkanswer";
      }, 2250);
      setTimeout(() => {
        e.target.className = "";
      }, 2500);
      setTimeout(() => {
        e.target.className = "checkanswer";
      }, 2750);
      setTimeout(() => {
        e.target.className = "";
      }, 3000);
      setTimeout(() => {
        e.target.className = "correctanswer";
      }, 3250);
      setTimeout(() => {
        setQuestionNumber(questionNumber + 1);
        e.target.className = "";

        setState(true);
        e.target.classList.add("itsname");
      }, 4500);
    } else {
      e.target.className = "checkanswer";
      setTimeout(() => {
        e.target.className = "";
      }, 2000);
      setTimeout(() => {
        e.target.className = "checkanswer";
      }, 2250);
      setTimeout(() => {
        e.target.className = "";
      }, 2500);
      setTimeout(() => {
        e.target.className = "checkanswer";
      }, 2750);
      setTimeout(() => {
        e.target.className = "";
      }, 3000);
      setTimeout(() => {
        e.target.className = "wronganswer";
      }, 3250);
      setTimeout(() => {
        setGameOver(true);
      }, 4000);
    }
  };

  ////////////////////////////
  let k = 0;
  const arrayOfPrices = [];
  let a = 100;
  for (let i = 1; i < 16; i++) {
    if (i == 1) {
      a = a;
    } else if (i === 3) {
      a = a + 100;
    } else if (i === 4) {
      a = a + 200;
    } else if (i === 12) {
      a = a * 2 - 3000;
    } else {
      a = a * 2;
    }

    if (questionNumber !== i) {
      arrayOfPrices.push(
        <div className="stepDiv">
          <h1 className="h1Number">{i}</h1>
          <h1 className="h1Price">${a}</h1>
        </div>
      );
    } else {
      {
        k = a;
      }
      arrayOfPrices.push(
        <div className="addedClassName">
          <h1 className="h1Number">{i}</h1>
          <h1 className="h1Price">${a}</h1>
        </div>
      );
    }
  }

  return (
    <div className="mainDiv">
      <div className="leftDiv">
        {gameOver ? (
          <div className="gameOverDiv">You Earned: ${k}</div>
        ) : questionNumber === 12 ? (
          <>
            <div className="gameOverDiv gameOverDiv1">
              Congratulations millionaire!!!
            </div>
            <div className="gameOverDiv">You Earned: ${k}</div>
          </>
        ) : (
          <>
            <div className="circleDiv">
              {
                <Timer
                  questionNumber={questionNumber}
                  setGameOver={setGameOver}
                  gameOver={gameOver}
                  timer={timer}
                  setTimer={setTimer}
                  state={state}
                />
              }
            </div>

            <div className="questionDiv">
              <p>{question?.question}</p>
            </div>
            <div className="answersDiv">
              <div className="answersChildDiv">
                <div className="itsname" onClick={(e) => buttonClick(e)}>
                  {question?.answers[0].text}
                </div>
                <div className="itsname" onClick={(e) => buttonClick(e)}>
                  {question?.answers[1].text}
                </div>
              </div>
              <div className="answersChildDiv">
                <div className="itsname" onClick={(e) => buttonClick(e)}>
                  {question?.answers[2].text}
                </div>
                <div className="itsname" onClick={(e) => buttonClick(e)}>
                  {question?.answers[3].text}
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="RightDiv">{arrayOfPrices.reverse()}</div>
    </div>
  );
}

export default App;
