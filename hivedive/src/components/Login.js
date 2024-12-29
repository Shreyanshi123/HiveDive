import styled from "styled-components";
import React from 'react'

export default function Login(props) {
  return (
    <Container>
        <Nav>
            <a href="/">
            <img src="images/hivee.png" alt="" />
            </a>
            <div>
                <Join>Join Now</Join>
                <SignIn>Sign In</SignIn>
            </div>
        </Nav> 
        <Section>
            <MainSec>
                <h1>Welcome to HIVEDIVE community, Where Innovation Takes a Dive. </h1>
                <img src="images/Business meeting(1).png" alt="" />
            </MainSec>
                <Form>
                <Google>
                   <img src="/images/google.png" alt="" /> 
                   Sign in with Google
                </Google>
                </Form>
            </Section> 
    </Container>
  )
}
const Container = styled.div`
padding:0px;`;
const Nav = styled.nav`
max-width:1128px;
margin:auto;
// padding:12px 0 16px;
display:flex;
align-items:center;
justify-content:space-between;
position:relative;
flex-wrap:nowrap;
&>a{
width:135px;
height:77px;
img {
      width: 80px;
      height: 77px;
    }
@media(max-width:768px){
padding:0 5px;
}
}
`;
const Join= styled.a`
font-size:22px;
padding:10px 12px;
text-decoration:none;
color:#333333;
margin-right:12px;
&:hover{
background-color: #E6E2D3 ;
color:rgba(14, 14, 14, 0.89);
text-decoration:none;
border-radius:39px ;
}
`; //rgb(21, 21, 21);

const SignIn = styled.a`
box-shadow: inset 0 0 0 1px #6B4F3B ;
color: #8E4F3D;
border-radius: 24px;
font-size:22px;
transition-duration:167ms;
font-weight:600;
line-height:40px;
padding:10px 24px;
text-align: center;
&:hover{
background-color:#E6E2D3 ;
color: #8E4F3D ;
text-decoration:none;
}
`;
const Section= styled.section`
    display:flex;
    flex-wrap:wrap;
    align-content:start;
    min-height:700px;
    padding-bottom: 138px;
    padding-top:43px;
    padding:55px 0px;
    position:relative;
    width:100%;
    max-width:1128px;
    align-items:center;
    margin:auto;
    @media(max-width:768px){
    margin:auto;
    min-height:0px;
    }
`;
const MainSec = styled.div`
    color:#333333;
    width:100%;
    h1{
        padding-bottom:0;
        width:52%;
        font-size:45px;
        font-weight:300;
        line-height:70px;
        @media(max-width:768px){
        text-align:center;
        font-size:25px;
        width:100%;
        line-height:2;
        }
        }
        img{
        z-index =-1;
        width:600px;
        height:600px;
        border-radius:50%;
        position:absolute;
        right:-70px;
        top:50px;
        @media(max-width:768px){
        position:intial;
        top:200px;
        left:20px;
        }
        }
`;

const Form = styled.div`
margin-top:50px;
width:350px;
@media(max-width:768px){
margin-top:720px;
margin-left:180px;
}`;
const Google = styled.button`
display:flex;
width:300px;
height:50px;
justify-content:center;
align-items:center;
background-color:#FFFFFF ;
font-size:20px;
color:#333333;
vertical-align : middle;
z-index:0;
transition-duration:169ms;
&:hover{
background-color:#E6E2D3;
}
`;