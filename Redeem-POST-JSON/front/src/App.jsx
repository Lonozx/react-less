import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


const styles = {
  display: 'flex',
  'justify-content':'center',
  background: 'aqua'
}

function App() {
 

  // const handleClick = () => {
  //   const jsonData = JSON.stringify(data);
  //   console.log(jsonData); // This will log the JSON data to your console
  //   // You can then write this data to a file using your preferred method
  // };

//   const [formData, setFormData] = useState({});
 

// const saveDataToJson = (data) => {
//   axios.post('/saveData', data)
//     .then((response) => {
//       console.log(response.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
//   const handleChange = (event) => {
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   };
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Call function to save data to JSON file
//     saveDataToJson(formData);
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" name="name" onChange={handleChange} />
//       </label>
//       <label>
//         Email:
//         <input type="email" name="email" onChange={handleChange} />
//       </label>
//       <button type="submit">Save</button>
//     </form>
//   );

  const [data, setData] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3031/user')
    .then(res => setData(res.data))
    .then(err => console.log(err))
  }, [])
  return (
    <div className='container'>
    <h1 style={styles}>Test fetch</h1>
    <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index)=>{
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
              </tr>
            )
          })}
        </tbody>
    </table>
    </div>
  )
}

export default App;
