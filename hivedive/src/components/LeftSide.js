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
                </a>
            </Widget>
        </ProfileCard>
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

const Widget = styled.div``;