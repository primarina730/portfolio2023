import React from 'react'
import { render } from 'react-dom';
import { Link, Outlet } from 'react-router-dom';
import './App.css';
import will from "./images/bestPictureOfWill.jpeg"


function Top() {
  return (
    <div>
         <h1>Kano Haruna</h1>
      {/* <ul className="menu">
        <li>About Me</li>
        <li>Blog</li>
        <li>Delieverable</li>
        <li>Qiita</li>
        <li>GitHub</li>
      </ul> */}
      <nav>
        <Link to="/deleverable">Deliverable</Link>
        <Link to="/Blog">Blog</Link>
      </nav>
      <Outlet/>
    <img className='topPhoto' src={will} alt="dog"/>

    </div>
  )
}

export default Top