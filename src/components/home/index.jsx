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

  console.log(userData.userData)

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
      console.log(data)
    });
    request.catch(err => {
      window.location.reload()
      console.log(err.response)
    });
  }, []);

  return (
    <>
      <Header>
        {!userActivity ? <Hello>carregando...</Hello> : <Hello>Olá, {userActivity.name}</Hello>}
        <img src={EXIT} alt="exit button" />
      </Header>

      <BankStatement>
        {!userActivity ? <Nothing>Não há registros de<br></br> entrada ou saída</Nothing> :
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

            {!userActivity ? "" : 
            <Balance>
              <h1>SALDO</h1>
              <h2>{50.90}</h2>
            </Balance>
            }
      </BankStatement>

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
