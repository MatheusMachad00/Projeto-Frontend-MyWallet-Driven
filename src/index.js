import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* import { useState } from 'react'; */

import Login from "./components/login";
import Signup from "./components/signup";
import Home from "./components/home";
import TransactionPlus from "./components/transactionPlus";
import TransactionMinus from "./components/transactionMinus";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/plus" element={<TransactionPlus />} />
        <Route path="/minus" element={<TransactionMinus />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.querySelector(".root"));