import React from "react";
import will from "./images/william.jpg";
import "./css/home.css";

function Home() {
  return (
    <div className="home-content">
      <img src={will} className="top-img" alt="top" />
    </div>
  );
}

export default Home;
