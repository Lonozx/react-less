import { createRef, useState } from 'react';
import React from 'react';
import './app.scss'
import Users from './Users';

function App() {
    
    const [inputData, setInputData] = useState(0);
    const [inputDataTwo, setInputDataTwo] = useState(0);
    const [result, setResult] = useState(0);

    function handleFirst(event){
        setInputData(event.target.value);
    }

    function handleSecond(event){
        setInputDataTwo(event.target.value);
    }

    function handleCalculation(){
        const sum = parseInt(inputData)  + parseInt(inputDataTwo);
        setResult(sum);
    }
// 1: встановити Реакт
// 2: створити 2 інпути і по нитисканню конопки робити 2 + 2 = 4
// 3: просто вивести на єкран масив обектів
// 4: вивести тількі тіх хто старше 18

// 5: шоб все працювало по кнопкам
let users = [
    {
        name: "Alexander",
        age: 22
    },
    {
        name: "Mikhailo",
        age: 10
    },
    {
        name: "Oleg",
        age: 30
    },
    {
        name: "Pavel",
        age: 8
    },
]   
    const [user, setUser] = useState('');
    function showUsers(){
        let newUsers = users.map((item, index)=> item.age>=18 &&
            <ul>
                <li key={index}>{item.name}</li>
                <li key={index}>{item.age}</li>
            </ul>)
            setUser(newUsers);
    }

  return (
    <>
    <div className="container">
        <h2>First Exercise</h2>
    <div className="container__calculate">
      <input value={inputData} onChange={handleFirst} type="number" className='input-one'/>
      <input value={inputDataTwo} onChange={handleSecond} type="number" className='input-two'/>
      <button onClick={handleCalculation} className='container__calculate-button'>Calculate</button>
      <label className='result' htmlFor="">{result}</label>
      </div>


      <h2>Second Exercise</h2>
      <div className="container__users">
       
        <button className='users' onClick={showUsers}>Show Users</button>
        <h3>{user}</h3>
        {/* <h3> <Users/></h3> */}
      </div>
      </div>
    </> 
  )
}

export default App;
