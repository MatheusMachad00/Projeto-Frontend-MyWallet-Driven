import { Main, InsOuts, InAndOut, Span, Footer } from "./style"

export default function InOut({value, description, type, date, index}) {

  return (
    <Main>
      <InsOuts>
        <Span>
          <div>
            {/* <h1>{date}</h1> */}
            <h1>20/07</h1>
          </div>

          <div>
            {/* <h2>{description}</h2> */}
            <h2>teste</h2>
          </div>
        </Span>

        <InAndOut>
          {/* <h1>{value}</h1> */}
          <h1>50.9</h1>
        </InAndOut>
        
      </InsOuts>

      <Footer>
        <h1>SALDO</h1>
        <h2>39,90</h2>
      </Footer>
    </Main>
  );
}