import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todolist';

function App() {

  let tasksOne = [
    {
    id:1,
    title: 'CSS',
    isDone: true,
  },
    {
    id:2,
    title: 'JS',
    isDone: true,
  },
    {
    id:3,
    title: 'React',
    isDone: false,
  },
]
  let tasksTwo = [
    {
    id:1,
    title: 'Terminator',
    isDone: true,
  },
    {
    id:2,
    title: 'XXX',
    isDone: false,
  },
    {
    id:3,
    title: 'Spider Man',
    isDone: true,
  },
]

  return (
    <div className="App">
      <Todo title="Food to eat" tasks={tasksOne}/>
      <Todo title="Projects to polish" tasks={tasksTwo}/>
      {/* <Todo title="Songs"/> */}
    </div>
  );

}

export default App;
