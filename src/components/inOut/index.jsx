import { Main, InsOuts, InAndOut, Span, Footer } from "./style"

export default function InOut() {

  return (
    <Main>
      <InsOuts>
        <InAndOut>
          <Span>
            <h1>30/01</h1>
            <h2>Almoço Mãe</h2>
          </Span>
          <h3>39,90</h3>
        </InAndOut>
      </InsOuts>

      <Footer>
        <h1>SALDO</h1>
        <h2>39,90</h2>
      </Footer>
    </Main>
  );
}