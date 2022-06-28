import ReactDOM from "react-dom";
/* import { BrowserRouter, Routes, Route } from "react-router-dom"; */
/* import { useState } from 'react'; */

import Login from "./components/login";

function App() {
  return (
      <Login />
  )
}

ReactDOM.render(<App />, document.querySelector(".root"));