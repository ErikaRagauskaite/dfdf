import React from "react";
import "./App.css";
import PomodoroTimer from "./PomodoroTimer";
import TodoList from "./TodoList";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <PomodoroTimer />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
