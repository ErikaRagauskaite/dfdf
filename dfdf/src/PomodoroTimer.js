import React, { useState, useEffect } from "react";

const PomodoroTimer = () => {
  const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setIsRunning(false);
            alert("Time is up!");
            return 1500;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(1500);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="pomodoro">
      <h2>Pomodoro Timer</h2>
      <div id="timer">{`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}</div>
      <div className="buttons">
        <i className="ri-play-circle-line" onClick={startTimer}></i>
        <i className="ri-pause-circle-line" onClick={pauseTimer}></i>
        <i className="ri-reset-right-line" onClick={resetTimer}></i>
      </div>
    </div>
  );
};

export default PomodoroTimer;
