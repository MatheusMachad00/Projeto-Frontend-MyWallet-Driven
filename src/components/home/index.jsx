import { Header, BankStatement, Footer, Hello, Nothing, PlusMinus } from "./style"

import EXIT from "./../../assets/Vector.svg"
import PLUS from "./../../assets/ant-design_plus-circle-outlined.svg"
import MINUS from "./../../assets/ant-design_minus-circle-outlined.svg"
import InOut from "../inOut"


export default function Home() {
  let test = true;

  return (
    <>
      <Header>
        <Hello>Olá, Fulano</Hello>
        <img src={EXIT} alt="exit button" />
      </Header>

      <BankStatement>
        {test ? <Nothing>Não há registros de<br></br> entrada ou saída</Nothing> :
      <InOut />}
        
      </BankStatement>

      <Footer>

        <div className="plus">
        <img src={PLUS} alt="plus button" />
        <PlusMinus>Nova<br></br>entrada</PlusMinus>
        </div>

        <div>
        <img src={MINUS} alt="minus button" />
        <PlusMinus>Nova<br></br>saída</PlusMinus>
        </div>

      </Footer>
    </>
  );
}