import React from 'react';
import will from "./images/bestPictureOfWill.jpeg";
import "./App.css"
import Navigator from './components/Navigator';

function App() {
  return (
    <div>
       <h1>Kano Haruna</h1>
      <Navigator/>
      <img className="topPhoto" src={will} alt="dog" />
    {/* <BrowserRouter>
      <Route path="/" element={<App/>}/>
      <Route path="https://github.com/primarina730" />

    <div className="App">
      <Link to="/" className='list'>Home</Link>
      <Link to="https://github.com/primarina730" className='list'>GitHub</Link>
      <Link to="" className='list'>About Me</Link>
      <Link to="" className='list'>Deliverable</Link>
      <Link to="" className="list">Skill</Link>
    </div>
    </BrowserRouter> */}
    </div>
  );
  }

export default App;
