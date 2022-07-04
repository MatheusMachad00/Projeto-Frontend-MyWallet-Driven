import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';
import { Header, BankStatement, Footer, Hello, Nothing, PlusMinus, Box, Balance } from "./style"

import EXIT from "./../../assets/Vector.svg"
import PLUS from "./../../assets/ant-design_plus-circle-outlined.svg"
import MINUS from "./../../assets/ant-design_minus-circle-outlined.svg"
import InOut from "../inOut"


export default function Home(userData) {
  const [userActivity, setUserActivity] = useState(false);
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    let TOKEN = userData.userData;

    const config = {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    };

    const LINK_API = "http://localhost:5000/activity";
    const request = axios.get(LINK_API, config);
    request.then(response => {
      const { data } = response;
      setUserActivity(data);
      if(data.activity !== undefined) return setTransactions(data.activity);
      console.log(data)
    });
    request.catch(err => {
      window.location.reload()
      console.log(err.response)
    });
  }, []);

  function sum() {
    if(transactions.length > 0) {
      return transactions.reduce((previous, current) => {
        if(current.type === "in") {
          return previous + current.value;
        }

        return previous - current.value;
      }, 0)
    } else {
      return 0;
    }
  }

const totalSum = sum();

  return (
    <>
      <Header>
        {!userActivity ? <Hello>carregando...</Hello> : <Hello>Olá, {userActivity.name}</Hello>}
        <Link to={"/"}>
        <img src={EXIT} alt="exit button" />
        </Link>
      </Header>

      <BankStatement>
        {!userActivity.activity ? <Nothing>Não há registros de<br></br> entrada ou saída</Nothing> :
          userActivity.activity.map(({ value, description, type, date }, index) => (
            <Box>
              <InOut
                value={value}
                description={description}
                type={type}
                date={date}
                id={index}
              />
            </Box>))}

      </BankStatement>

      {transactions.length === 0 ? "" : 
            <Balance>
              <h1>SALDO</h1>
              <h2 className={totalSum > 0 ? "green" : "red"}>{parseFloat(totalSum).toFixed(2)}</h2>
            </Balance>
            }

      <Footer>
        <Link to={"/plus"}>
          <div className="plus">
            <img src={PLUS} alt="plus button" />
            <PlusMinus>Nova<br></br>entrada</PlusMinus>
          </div>
        </Link>

        <Link to={"/minus"}>
          <div>
            <img src={MINUS} alt="minus button" />
            <PlusMinus>Nova<br></br>saída</PlusMinus>
          </div>
        </Link>

      </Footer>
    </>
  );
}
