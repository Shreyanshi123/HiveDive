import React from 'react'
import styled from 'styled-components'
export default function LeftSide() {
  return (
    <Container>
        <ProfileCard>
            <UserInfo>
                <CardBackground/>
                <a>
                    <Photo/>
                    <Link>Hello,there</Link>
                </a>
                <a>
                    <AddPhotoText>Add a Photo</AddPhotoText>
                </a>
            </UserInfo>
            <Widget>
                <a>
                    <div>
                        <span> Connections</span>
                        <span>Grow your network</span>
                    </div>
                    <img src="/images/widget-icon.svg" alt="" />
                </a>
            </Widget>
            <Item>
                <span>
                    <img src="/images/item-icon.svg" alt="" />
                    Bookmarks
                </span>
            </Item>
        </ProfileCard>
        <CommunityCard>
            <a>
                <span>Groups</span>
            </a>
            <a>
                <span>Events </span>
            </a>
            <a>
                <span>Follow Hashtags</span>
            </a>
            <a>
                <span>Discover More</span>
            </a>
        </CommunityCard>
    </Container>
  )
}
const Container = styled.div``;
const ProfileCard = styled.div`
text-align:center;
overflow:hidden;
margin-bottom:8px;
background-color:#F0E1D2;
border-radius:5px;
position:relative;
border:none;
box-shadow: 0 0 0 1px #8E4F3D , 0 0 0 #8E4F3D;
transition:box shadow 83ms;
`;


const UserInfo=styled.div`
background-color:#F0E1D2;
border-bottom:2px solid #8E4F3D;
padding:12px 12px 16px;
word-wrap:break-word;
`;
const CardBackground = styled.div`
background: url('/images/card-bg.svg');
background-size:390px;
height:54px;
margin:-12px -12px 0;
`;
const Photo = styled.div`
background-color:#fef4eb;
box-shadow:none;
background-image:url('/images/photo.svg');
background-repeat: no-repeat;
background-position:center;
width:90px;
height:90px;
border:1px solid rgb(114, 47, 28);
border-radius: 50%;
margin: -38px auto 12px;
`;

const Link = styled.div`
background-color:#F0E1D2;
font-size:20px;
line-height:2;
color:rgb(114, 47, 28);
font-weight: 700;

`;
const AddPhotoText = styled.div`
background-color:#F0E1D2;
color:rgb(114, 47, 28);
font-weight:500;
`;

const Widget = styled.div`
background-color:#F0E1D2;
color:rgb(114, 47, 28);
font-weight:600;
border-bottom: 1px solid rgb(114, 47, 28);
padding-top: 12px;
padding-bottom:12px;
width:100%;
a{
display:flex;
justify-content:space-between;
align-items:center;
padding:4px 12px;
}
a>div{
display:flex;
flex-direction:column;
text-align:left;
}
a>div>span{
background-color:#F0E1D2;
font-size:16px;
line-height:1.33;
}
:hover{
background-color:#fef4eb;
}
`;
const Item = styled.div`
background-color:#F0E1D2;
border-color:rgb(114, 47, 28);
color: rgb(114,47,28);
font-weight:600;
padding:12px;
:hover{
background-color:#fef4eb;
}
span{
background-color:#F0E1D2;
display: flex;
align-items:center;
}
`;

const CommunityCard = styled(ProfileCard)`
font-weight:600;
padding:8px 0 8px;
display:flex;
flex-direction:column;
align-items:start;
a>span{
background-color:#F0E1D2;
}
a{
color: rgb(114,47,28);
padding: 4px 12px 4px 12px;
:hover{
color:black;
 }
}
`;
