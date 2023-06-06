import React, { useEffect, useState } from "react";

function Timer({ questionNumber, setGameOver, timer, setTimer, state }) {
  if (timer < 0) {
    setGameOver(true);
  }
  useEffect(() => {
    state ? setTimer(30) : setTimer((prev) => prev);

    const interval = setInterval(() => {
      setTimer((prev) => {
        return state ? prev - 1 : prev;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [questionNumber, state]);
  return timer;
}

export default Timer;
