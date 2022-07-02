import styled from 'styled-components'

export const Main = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
padding: 23px 12px 0 12px;

h1{
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #C6C6C6;
  margin-right: 10px;
}

h2{
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
}

h3{
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: right;
}

.in{
  color: #03AC00;
}

.out{
  color: #C70000;
}
`

export const LeftChunk = styled.div`
display: flex;
`