import styled from "styled-components";
import React from 'react'

export default function Header(props) {
  return (
   <Container>
    <Content>
        <Logo>
            <a href="/home">
            <img src="images/logo-hive.svg" alt="" /></a>
        </Logo>
        <Search>
            <div>
                <input type="text" placeholder="Search" />
            </div>
            <SearchIcon> <img src="images/search (1).png" alt="" /></SearchIcon>
        </Search>
        <Nav
        ><NavListWrap>
            <NavList className="active">
                <a>
                    <img src="images/nav-home.svg" alt="" />
                    <span>Home</span>
                    </a>
                </NavList>
            <NavList>
            <a>
                    <img src="images/nav-jobs.svg" alt="" />
                    <span>Jobs</span>
                    </a>
            </NavList>
            <NavList>
            <a>
                    <img src="images/nav-messaging.svg" alt="" />
                    <span>Messages</span>
                    </a>
            </NavList>
            <NavList>
            <a>
                    <img src="images/nav-notifications.svg" alt="" />
                    <span>Notifications</span>
                    </a>
            </NavList>
            <NavList>
            <a>
                    <img src="images/nav-network.svg" alt="" />
                    <span>Network</span>
                    </a>
            </NavList>
            <User>
                <a>
                    <img src="images/user.svg" alt="" />
                    <span>Me
                    <img src="images/down-icon.svg" alt="" />
                    </span>
                </a>
                <SignOut> <a>Sign Out</a></SignOut>
            </User>
            <Work>
                <a>
                    <img src="images/nav-work.svg" alt="" />
                    <span>
                        Work
                    <img src="images/down-icon.svg" alt="" />
                    </span>
                    
                </a>
            </Work>
        </NavListWrap>
        </Nav>
    </Content>
   </Container>
  )
}
const Container = styled.div`
width:100vw;
height:9vh;
background-color:#8E4F3D ;
left:0;
top:0;
position:fixed;
font-size:25px;
border:1px solid black;
`;
const Content = styled.nav`
display:flex;
align-items:center;
padding:0px 12px;
background-color:#8E4F3D;
width:100%;
height:100%;
margin:0 auto;
color:#F0E1D2;
`;
const Logo = styled.div`
background-color:#8E4F3D;
margin-right:50px;
font-size:0px;
`;
const Search= styled.div`
background-color:#8E4F3D;
display:flex;
align-items:center;
opacity:1;
flex-grow:1;
position:relative;
&>div{
max-width:280px;
input{
border:none;
box-shadow:none;
background-color: #E6E2D3 ;
border-radius:2px;
padding:0px 9px 0px 4px;
line-height:1.75;
font-weight:200;
font-size:16px;
border-color:#8E4F3D;
height:29px;
}
}
`;
const SearchIcon = styled.div`
position:absolute;
left:-30px;
margin:0;
border-radius:0 2px 2px 0;
box-shadow:none;

display:flex;
justify-content:center;`
;

const Nav = styled.nav`
background-color:#8E4F3D;
margin-right:15px;
display:block;
@media(max-width:768px){
position:fixed;
left:0;
bottom:0;
width:100%;}
`;

const NavListWrap=styled.ul`
background-color:#8E4F3D;
display:flex;
flex-wrap:nowrap;
list-style-type:none;
z-index:100;

.active {
span:after{
content:"";
transform: scaleX(1);
border-bottom: 2px solid #F0E1D2;
bottom:1px;
left:0;
position:absolute;
transition: transform 0.2s ease-in-out;
width:100%;
border-color:#F0E1D2;
}
}
`;
const  NavList = styled.li`
display:flex;
align-items:center;
background-color:#8E4F3D;
a{
display:flex;
flex-direction:column;
align-items:center;
font-size:12px;
font-weight:400;
justify-content:center;
line-height:1.5;
min-width:80px;
position:relative;
text-decoration:none;
}
span{
background-color:#8E4F3D;
display:flex;
align-items:center;
padding:2px 0px;
}
@media(max-width:768px){
min-width:70px;
}
`;
const SignOut = styled.div`
background-color:rgb(239, 165, 142);
position:absolute;
top: 65px;
border-radius: 10px;
width:100px;
height:40px;
display:flex;
align-items:center;
justify-content:center;
display:none;
a{
font-size:17px;
color:#8E4F3D;
}
`;
const User = styled(NavList)`
a> svg{
width:24px;
border-radius:50%;
}
a>img{
width:40px;
border-radius:50%;
}
span{
display:flex;
align-items:center;
}
span>img{
margin-left:3px;
}
&:hover{
${SignOut}{
display:flex;
}
}
`;
const Work = styled(User)`
a>img{
border-radius:0;
}`;

