// import { render } from '@testing-library/react';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import App from './App';
// import Deliverable from './Deliverable';

// const rootElement = document.getElementById("root");
// render(
//   <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<App/>}>
//       <Route path="deleverable" element={<Deliverable/>}>
//       </Route>
//     </Route>
//   </Routes>
//   </BrowserRouter>,
//   // rootElement
// );
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);