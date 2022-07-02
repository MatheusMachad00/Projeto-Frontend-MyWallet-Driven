import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import Login from "./components/login";
import Signup from "./components/signup";
import Home from "./components/home";
import TransactionPlus from "./components/transactionPlus";
import TransactionMinus from "./components/transactionMinus";
import UserContext from "./context/UserContext";

function App() {
  const [userData, setUserData] = useState({});


  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setUserData={setUserData}/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home userData={userData}/>} />
          <Route path="/plus" element={<TransactionPlus userData={userData}/>} />
          <Route path="/minus" element={<TransactionMinus userData={userData}/>} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

ReactDOM.render(<App />, document.querySelector(".root"));