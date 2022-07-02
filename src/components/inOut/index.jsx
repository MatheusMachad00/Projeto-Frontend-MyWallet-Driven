/* import { Main, InsOuts, InAndOut, Span, Footer } from "./style" */
import { Main, LeftChunk, Box } from "./style"

export default function InOut({value, description, type, date, index}) {

  return (
    <Main id={index}>
      <LeftChunk>
        <h1>{date}</h1>
        <h2>{description}</h2>
      </LeftChunk>
      <h3 className={type}>{parseFloat(value).toFixed(2)}</h3>
    </Main>
)}