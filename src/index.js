import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* import { useState } from 'react'; */

import Login from "./components/login";
import Signup from "./components/signup";
import Home from "./components/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.querySelector(".root"));