import { Header } from "./style"

import EXIT from "./../../assets/Vector.svg"
import PLUS from "./../../assets/ant-design_plus-circle-outlined.svg"
import MINUS from "./../../assets/ant-design_minus-circle-outlined.svg"


export default function Home() {

  return (
    <>
      <Header>
        <h1>Olá, Fulano</h1>
        <img src={EXIT} alt="exit button" />
      </Header>

      <main>
        Não há registros de
        entrada ou saída
      </main>

      <footer>

        <div>
        <img src={PLUS} alt="plus button" />
        <h1>Nova<br></br>entrada</h1>
        </div>

        <div>
        <img src={MINUS} alt="minus button" />
        <h1>Nova<br></br>saída</h1>
        </div>

      </footer>
    </>
  );
}