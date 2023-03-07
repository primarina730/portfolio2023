import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function Navigator() {
  return (
    <div>
            <BrowserRouter>
    <Routes>
      <Route path="/"/>
      <Route path="https://github.com/primarina730" />
    </Routes>

    <div className="App">
      <Link to="/" className='list'>Home</Link>
      <Link to="https://github.com/primarina730" className='list'>GitHub</Link>
      <Link to="" className='list'>About Me</Link>
      <Link to="" className='list'>Deliverable</Link>
      <Link to="" className="list">Skill</Link>
    </div>
    </BrowserRouter>
    </div>
  )
}

export default Navigator