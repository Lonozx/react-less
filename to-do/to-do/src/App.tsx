import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todolist';
import {TaskType} from './Todolist'
import './main.css'

export type FilterValuesType = "all" | "completed" | "active"

function App() {

  let tasksOne = [
    {
      id: 1,
      title: 'CSS',
      isDone: true,
    },
    {
      id: 2,
      title: 'JS',
      isDone: true,
    },
    {
      id: 3,
      title: 'React',
      isDone: false,
    },
  ]
  let tasksTwo = [
    {
      id: 1,
      title: 'Terminator',
      isDone: true,
    },
    {
      id: 2,
      title: 'XXX',
      isDone: false,
    },
    {
      id: 3,
      title: 'Spider Man',
      isDone: true,
    },
  ]

  let [tasks, setTasks] = useState<Array<TaskType>>(tasksOne);
  let [filter, setFilter] = useState<FilterValuesType>('all');

  function deleteTask(id: number) {
    let newFilteredTasks = tasks.filter(item => item.id !== id)
    // console.log(newFilteredTasks); //debugg feature
    setTasks(newFilteredTasks);
  }

  function changeFilter(value: FilterValuesType){
    setFilter(value);
  }

  let taskToDoList = tasks;

  if(filter==='completed'){
    taskToDoList = tasks.filter(item=>item.isDone===true)
  }
  if(filter==='active'){
    taskToDoList = tasks.filter(item=>item.isDone===false)
  }


  return (
    <div className="App">
      <Todo deleteTask={deleteTask} title="Food to eat" tasks={taskToDoList} changeFilter={changeFilter}/>
      {/* <Todo deleteTask={deleteTask} title="Projects to polish" tasks={tasksTwo} /> */}
      {/* <Todo title="Songs"/> */}
    </div>
  );

}

export default App;
