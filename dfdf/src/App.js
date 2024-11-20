import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import PomodoroTimer from "./PomodoroTimer";
import TodoList from "./TodoList";

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showPomodoro, setShowPomodoro] = useState(false);
  const [showTodoList, setShowTodoList] = useState(false);
  const pomodoroRef = useRef(null);
  const todoListRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (showPomodoro && pomodoroRef.current) {
      pomodoroRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showPomodoro]);

  useEffect(() => {
    if (showTodoList && todoListRef.current) {
      todoListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showTodoList]);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString([], {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handlePomodoroClick = () => {
    setShowPomodoro(!showPomodoro);
  };

  const handleTodoListClick = () => {
    setShowTodoList(!showTodoList);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>
          Dual<span>Focus</span>
        </h1>
        <p className="description">
          Welcome to DualFocus, your productivity dashboard. Use the Pomodoro
          timer to stay focused and the to-do list to keep track of your tasks.
        </p>
        <div className="datetime">
          <p className="date">{formatDate(currentTime)}</p>
          <p className="time">{formatTime(currentTime)}</p>
        </div>
        <div className="icons">
          <i
            className="ri-timer-line"
            data-tooltip="Pomodoro Timer"
            onClick={handlePomodoroClick}
          ></i>
          <i
            className="ri-checkbox-circle-line"
            data-tooltip="To-Do List"
            onClick={handleTodoListClick}
          ></i>
        </div>
        {showPomodoro && (
          <div className="box" ref={pomodoroRef}>
            <PomodoroTimer />
          </div>
        )}
        {showTodoList && (
          <div className="box" ref={todoListRef}>
            <TodoList />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
