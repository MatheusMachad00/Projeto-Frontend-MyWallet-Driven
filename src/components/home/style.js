import styled from 'styled-components'

export const Header = styled.header`
display: flex;
padding: 24px 24px 22px;
justify-content: space-between;

`

export const Hello = styled.h1`
font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
`

export const BankStatement = styled.main`
height: 390px;
margin: 0 24px 0;
background-color: #FFFFFF;
display: flex;
/* background-color: red; */
position: relative;
border-radius: 5px 5px 1px 1px;
display: flex;
flex-direction: column;
overflow-y: auto;
`
export const Nothing = styled.h1`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #868686;
  padding: 200px 73px ;
`

export const Footer = styled.footer`
display: flex;
padding: 42px 25px 16px;
margin-top: 15px;

div{
  width: 155px;
  height: 114px;
  background: #A328D6;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0 10px 10px;
}

img{
  width: 25px;
  height: 25px;
}

.plus{
  margin-right: 15px;
}
`

export const PlusMinus = styled.h1`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  color: #FFFFFF;
`

export const Box = styled.div`
width: 100%;
`

export const Balance = styled.div`
width: 325.5px;
display: flex;
justify-content: space-between;
padding: 10px 15px 10px 15px;
border-radius: 0px 0px 5px 5px;
position: fixed;
bottom: 160px;
left: 25px;
z-index: 50;
background-color: #FFFFFF;


h1{
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  color: #000000;
}

h2{
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: #03AC00;
  margin-left: 185px;
}
`