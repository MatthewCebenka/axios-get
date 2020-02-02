import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

function App() {

// Come back to this when you get to the side effects lecture.

let [data, setData] = useState();

const url = "https://api.github.com/users/MatthewCebenka/followers";
useEffect(() => {
  axios
    .get(url)
    .then(response => {
      console.log(response.data);
      setData(response);
      console.log(data);
    })
    .catch(error => console.log("ERROR"));
}, []);
// console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
