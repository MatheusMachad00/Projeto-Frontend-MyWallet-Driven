import styled from 'styled-components'

export const Header = styled.header`
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 26px;
line-height: 31px;
color: #FFFFFF;
padding: 25px 0 40px 24px;
`

export const Forms = styled.form`
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  input{
    margin-bottom: 13px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    width: 326px;
    height: 58px;
    font-size: 20px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
  }
  input::placeholder {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    padding-left: 16px;
  }
button{
    width: 326px;
    height: 58px;
    background: #A861D6;
    border-radius: 4.63636px;
    color: #FFFFFF;
    border: none;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20.976px;
    display: flex;
    justify-content: center;
    align-items: center;
}
`