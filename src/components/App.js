import '../styles/App.css';
import React, { useState } from "react";

const App = () => {
  const searchArray = [
    "Newton",
    "School",
    "Newton School",
    "React",
    "Preact",
    "Node",
    "Mongoose",
    "Angular",
    "Vue",
    "Apple",
    "Microsoft",
    "Netflix",
    "Meta"
  ];
  const [data, setData] = useState("");
  const [input, setInput] = useState(searchArray);

  const HandlerInput = (e) => {
    setData(e.target.value);
    setInput(input);
  };

  return (
    <div id="main">
      <p>Search</p>
      <input
        onChange={HandlerInput}
        value={data}
        id="search-input"
        type="text"
      />
      <p>Result</p>

      {input
        .filter((val) => {
          if (data === "") {
            return null;
          } else if (val.toLowerCase().includes(data.toLowerCase())) {
            return val;
          }
        })
        .map((val, ind) => {
          return (
            <div key={ind}>
              <ul>
                <li>{val}</li>
              </ul>
            </div>
          );
        })}
    </div>
  );
};

export default App;
