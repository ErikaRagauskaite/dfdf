import React, { useState, useEffect } from "react";

const PomodoroTimer = () => {
  const [timeLeft, setTimeLeft] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setIsRunning(false);
            return 1500;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    const startTimer = () => setIsRunning(true);
    const pauseTimer = () => setIsRunning(false);
    const resetTimer = () => {
      setIsRunning(false);
      setTimeLeft(1500);
    };

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return () => clearInterval(timer);
  }, [isRunning]);

  return (
    <div className="pomodoro">
      <h2>Pomodoro Timer</h2>
      <div id="timer">{`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}</div>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default PomodoroTimer;
