import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Deliverables from "./Deliverables";
import NoMatch from "./NoMatch";
import "./css/global.css";
import "./css/header.css";

function Header() {
  return (
    <div>
      <div className="header-component">
        <a href="/">
          <h2 className="page-title">Kano Haruna</h2>
        </a>
        <div className="header-navigation">
          <ul>
            <li>
              <a href="https://github.com/primarina730">GitHub</a>
            </li>
            <li>
              <a href="deliverables">Deliverables</a>
            </li>
            <li>
              <a href="10-things">10&nbsp;Things</a>
            </li>
            <li>
              <a href="about">About Me</a>
            </li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deliverables" element={<Deliverables />} />
        <Route path="/10things" element={<Deliverables />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default Header;
