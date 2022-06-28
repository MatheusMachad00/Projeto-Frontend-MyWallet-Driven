import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';
import { SignScreen } from "./style"

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("")
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <SignScreen>
      <h1>MyWallet</h1>

      <form /* onSubmit={submitData} */>
        <input
          type="text"
          disabled={loading ? true : false}
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)} />

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

        <input
          type="password"
          disabled={loading ? true : false}
          placeholder="Confirme sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />


        <button type="submit">
          {loading ? (
            <ThreeDots color="#FFFFFF" height={13} align='center' />
          ) : (
            'Cadastrar'
          )}
        </button>
      </form>
      <Link to={"/"}>
        <h2>Já tem uma conta? Faça seu login!</h2>
      </Link>
    </SignScreen>
  );
}
