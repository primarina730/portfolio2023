import React from 'react';
import './App.css';
import will from "./images/bestPictureOfWill.jpeg"

function App() {
 
  return (
    <div className="App">
     <h1>Kano Haruna</h1>
      <ul className="menu">
        <li>About Me</li>
        <li>Blog</li>
        <li>Delieverable</li>
        <li>Qiita</li>
        <li>GitHub</li>
      </ul>
    <img className='topPhoto' src={will} alt="dog"/>
    
    </div>
  );
}

export default App;
