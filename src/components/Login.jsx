import styled from "styled-components";
import {  loginUrl } from "../services/spotify";



const Banner = styled.div`
width:100%;
height:100vh;
font-weight:bold;
display:grid;
place-items:center;
background-color:black;
`
const Content = styled.h1`
color: white;
opacity: 0.5;
font-size:2rem;
&:hover{
  cursor:pointer;
  transition: 2s ease-out;
  color: yellow;
  font-size: 3rem;
}
`
const Button =styled.button`
background: orange;
width:200px;
height: 50px;
border-radius:99px;

`
const SignUpBut = styled.a`
text-decoration:none;
font-size: 1.rem;
padding:20px;
color:white;
` 
const Login = () => {


  return (
    <Banner>
      <Content>MusicFy</Content>
      <Button>
        <SignUpBut href={loginUrl}>SIGN IN WITH MUSICFY</SignUpBut>
      </Button>
    </Banner>
  )
}

export default Login