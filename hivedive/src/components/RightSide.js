import React from 'react'
import styled from 'styled-components'
export default function RightSide() {
  return (
    <Container>
       <Follow>
        <Title>
          <h2>Add to your Feed</h2>
          <img src="images/feed-icon.svg" alt="" />
        </Title>
        <FeedList>
          <li>
            <a>
              <Avatar/>
            </a>
            <div>
              <span>#HiveDive</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a>
              <Avatar/>
            </a>
            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>
        <Recommendation> View all recommendations
        <img src="images/right.png" alt="" />
        </Recommendation>
       </Follow>
       <Banner>
          <img src="images/cropped_hivedive_banner(1).png" alt="" />
        </Banner>
    </Container>
  )
}
const Container = styled.div`
grid-area:rightside;

`;
const Follow = styled.div`
text-align:center;
overflow:hidden;
margin-bottom:8px;
border-radius:5px;
background-color:#F0E1D2;
color: rgb(114,47,28);
position:relative;
border:none;
box-shadow: 0 0 0 1px rgb(114,47,28), 0 0 0 rgb(114,47,28);
padding:20px;

`;

const Title = styled.div`
background-color:#F0E1D2;
display:flex;
align-items: center;
justify-content:space-between;
font-size:17px;
width:100%;
padding: 5px;
h2{
background-color:#F0E1D2;
}
`;
const FeedList = styled.ul`
margin-top: 15px;
background-color:#F0E1D2;
li{
background-color:#F0E1D2;
display:flex;
align-items:center;
margin:12px 0px;
position: relative;
font-size:18px;
div{
display:flex;
flex-direction:column;
background-color:#F0E1D2;
span{
background-color:#F0E1D2;
}
button{
background-color:rgb(114,47,28);
color:#F0E1D2;
font-size:18px;
box-shadow: inset  0 0 0 1px #F0E1D2 ;
padding:16px;
border-radius:25px;
font-weight:500;
max-height: 32px;
max-width:480px;
display:inline-flex;
justify-content: center;
align-items:center;
outline:none;
margin-top:5px;
}
}
}`;

const Avatar = styled.div`
background-image:url('images/icons8-hash-50(2).png');
background-size:contain;
background-position:center;
background-repeat: no-repeat;
width:40px;
height:40px;
margin-right:9px;
`;

const Recommendation = styled.div`
background-color:#F0E1D2;
display:flex;
justify-content:center;
align-items:center;
padding:5px;
font-size:18px;
font-weight:600;
img{
margin-left:5px;
}
`;
const Banner =styled(Follow)`
img{
width:100%;
height:100%;
}
`;