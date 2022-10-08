import React, { useEffect, useState } from 'react'

import '../styles/App.css';


const App = () => {
  const searchArray = ["Newton", "School", "Newton School", "React", "Preact", "Node", "Mongoose", "Angular", "Vue", "Apple", "Microsoft", "Netflix", "Meta"]
  const [data, setData] = useState(searchArray);

  const HandlerInput = (e) =>{
    setData(e.target.value)
  }

  useEffect(()=>{
    HandlerInput();
  },[])
  
  return (
    <div id="main">
      <p>Search</p>
      <input onChange={HandlerInput} value={data} id="search-input" type="text" />
      <p>Result</p>

      {

      }
    </div>
  )
}


export default App;
