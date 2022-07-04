import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';
import { LoginScreen } from "./style"

export default function Login({setUserData}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function login(event) {
    event.preventDefault();
    setLoading(true);
    const LINK_API = "https://apimywalletdriven.herokuapp.com/login";
    const request = axios.post(LINK_API, {
      email,
      password
    });
    request.then(response => {
      const { data } = response;
      setUserData(data);
      /* window.localStorage.clear();
      console.log(data)
      const stringifyData = JSON.stringify(data);
      localStorage.setItem("userDataStorage", stringifyData); */
      navigate("/home");
    })
    request.catch(err => {
      console.log(err.response);
      setLoading(false);
      alert("E-mail ou senha incorretos. Tente novamente.");
    });
  }

  return (
    <LoginScreen>
      <h1>MyWallet</h1>

      {<form onSubmit={login}>
        <input
          type="email"
          disabled={loading ? true : false}
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />

        <input
          type="password"
          disabled={loading ? true : false}
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">
          {loading ? (
            <ThreeDots color="#FFFFFF" height={13} align='center' />
          ) : (
            'Entrar'
          )}
        </button>
      </form>}
      <Link to={"/signup"}>
        <h2>Primeira vez? Cadastre-se!</h2>
      </Link>
    </LoginScreen>
  );
}