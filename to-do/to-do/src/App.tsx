import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todolist';

function App() {

  return (
    <div className="App">
      <Todo title="Food to eat" />
      <Todo title="Projects to polish" />
      <Todo title="Songs"/>
    </div>
  );

}

export default App;
