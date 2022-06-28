import styled from 'styled-components'

export const LoginScreen = styled.div`
display: flex;
flex-direction: column;
align-items: center;


h1{
  font-family: 'Saira Stencil One';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 50px;

  color: #FFFFFF;
}

form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
input{
    margin-bottom: 6px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    width: 326px;
    height: 58px;
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