import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';
import { Header, Forms } from "./style"

export default function TransactionPlus({ userData }) {
  const [transactionValue, setTransactionValue] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function sendTrasaction(event) {
    event.preventDefault();
    setLoading(true);
    let TOKEN = userData;
    const config = {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    };
    const LINK_API = "https://apimywalletdriven.herokuapp.com/in";
    const request = axios.post(LINK_API, {
      value: parseFloat(transactionValue.replace(",", ".")),
      description
    }, config);
    request.then(response => {
      const { data } = response;
      navigate("/home");
    })
    request.catch(err => {
      console.log(err.response);
      setLoading(false);
      alert("E-mail ou senha incorretos. Tente novamente.");
    });
  }

  return (
    <>
      <Header>Nova entrada</Header>

      <Forms onSubmit={sendTrasaction}>
        <input
          type="string"
          disabled={loading ? true : false}
          placeholder="Valor"
          value={transactionValue}
          onChange={(e) => setTransactionValue(e.target.value)} />

        <input
          type="string"
          disabled={loading ? true : false}
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)} />

        <button type="submit">
          {loading ? (
            <ThreeDots color="#FFFFFF" height={13} align='center' />
          ) : (
            'Salvar entrada'
          )}
        </button>
      </Forms>
    </>
  );
}