import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';
import { Header, Forms } from "./style"

export default function TransactionPlus() {
  const [transactionValue, setTransactionValue] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Header>Nova entrada</Header>

      <Forms >
        <input
          type="number"
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