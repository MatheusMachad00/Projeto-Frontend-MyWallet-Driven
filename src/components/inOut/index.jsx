import { Main, InsOuts, InAndOut, Span, Footer } from "./style"

export default function InOut() {

  return (
    <Main>
      <InsOuts>
        <Span>
          <div>
            <h1>30/01</h1>
            <h1>07/09</h1>
            <h1>06/10</h1>
          </div>

          <div>
            <h2>Almoço</h2>
            <h2>Presente</h2>
            <h2>Mangá</h2>
          </div>
        </Span>

        <InAndOut>
          <h1>31,90</h1>
          <h1>40,78</h1>
          <h1>23,90</h1>
        </InAndOut>
        
      </InsOuts>

      <Footer>
        <h1>SALDO</h1>
        <h2>39,90</h2>
      </Footer>
    </Main>
  );
}