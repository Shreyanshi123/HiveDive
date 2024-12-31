import styled from "styled-components";
import React from 'react'
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Main from "./Main";
export default function Home() {
  return (
    <Container>
        <Section>
            <h5>
                <a>Looking for a Job, Internship or Want to make connections?</a>
            </h5>
            <p>Find People with similar interests and Get Going on your Career</p>
        </Section>
        <Layout>
            <LeftSide></LeftSide>
            <Main></Main>
            <RightSide></RightSide>
        </Layout>
    </Container>
  )
}
const Container = styled.div`
padding-top:72px;
max-width:100%;
font-size:16px;
`;

const Section = styled.div`
text-decoration:underline;
text-align:center;
display:flex;
justify-content:center;
margin-top:10px;
h5{
margin-right:10px;
a{
font-weight:700;
}
}
@media(max-width:768px){
display:flex;
flex-direction:column;
justify-content:center;
padding:5px 0px;
}`;

const Layout = styled.div`
z-index:0;
padding:15px 0px;
display:grid;
font-color:#8E4F3D;
width:90vw;
// margin:auto;
grid-template-areas :"leftside main rightside";
grid-template-columns:minmax(0,5fr) minmax(0,12fr) minmax(300px,7fr);
column-gap:25px;
row-gap:25px;
margin:25px auto;
@media(max-width:768px){
display:flex;
flex-direction:column;
padding:0 5px;
}

`;