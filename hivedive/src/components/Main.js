import React from "react";
import styled from "styled-components";

export default function Main() {
  return (
    <Container>
      <PostBox> Share
        <div>
          <button>
            <img src="/images/user.svg" alt="" />
          </button>
          <a>Start a post</a>
        </div>
        <div>
          <button>
          <span>
            <img src="/images/icons8-photo-gallery-40.png" alt="" />
            Photo</span>
          </button>

          <button>
          <span>
            <img src="/images/icons8-video-48(1).png" alt="" />
            Video</span>
          </button>

          <button>
          <span>
            <img src="/images/icons8-event-48.png" alt="" />
           Event</span>
          </button>

          <button>
            <span>
            <img src="/images/icons8-article-50.png" alt="" />
            Article</span>
          </button>
        </div>
      </PostBox>
     
        <Article>
         <Post>
          <a>
            <img src="/images/user.svg" alt="" />
            <div>
              <span>Title</span>
              <span>Info</span>
              <span>Date</span>
            </div>
          </a>
          <button>
            <img src="images/icons8-three-dots-30.png" alt="" />
          </button>
         </Post>
         <Description> Description</Description>
         <PostImage>
          <a>
          <img src="/images/winter.webp" alt="" />
          </a>
         </PostImage>
         <Likes>
          <li>
            <button>
              <img src="images/icons8-like-48(1).png" alt="" />
              <img src="images/icons8-applause-100.png" alt="" />
              <span>75</span>
            </button>
          </li>
          <li>
            <a> 1 comment</a>
          </li>
         </Likes>
         <Activity>
         <button>
          <img src="images/icons8-like-48(1).png" alt="" />
          <span>Like</span>
         </button>
         <button>
          <img src="images/icons8-comments-100.png" alt="" />
          <span>Comment</span>
         </button>
         <button>
          <img src="images/icons8-share-100.png" alt="" />
          <span>Share</span>
         </button>
         <button>
          <img src="images/icons8-paper-plane-100.png" alt="" />
          <span>Send</span>
         </button>
         </Activity>
        </Article>
    </Container>
  );
}
const Container = styled.div`
  grid-area: main;
`;
const MainCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 15px;
  background-color: #f0e1d2;
  color: rgb(114, 47, 28);
  font-size: 18px;
  font-weight: 500;
  border-radius: 8px;
  position: relative;
  border: none;
  box-shadow: 0 2px 0px 1px rgb(114, 47, 28), 0 0px 2px 2px rgb(114, 47, 28);
`;
const PostBox = styled(MainCard)`
  display: flex;
  flex-direction: column;
  align-items:space-between;
  margin: 0 0 15px;
  padding: 15px 15px;
  background-color: #f0e1d2;
  div {
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    background-color: #f0e1d2;
    button {
      color: rgb(114, 47, 28);
      font-size: 18px;
      font-weight: 600;
      outline: none;
      background-color: #f0e1d2;
      width: 100px;
      line-height:1.5;
      min-height:48px;
      border:none;
      padding: 5px;
      span {
        background-color: #f0e1d2;
        display:flex;
        flex-direction:row;
        justify-content:start;
        align-items:center;
        img {
        width: 40%;
        height: 60%;
       
      }
      }
    }
  }
 div:nth-of-type(1){
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:start;
  font-size:17px;
  font-weight:600;
  border-bottom: 1px solid rgb(114, 47, 28);
  padding-bottom:10px;
  margin-bottom:15px;
  button {img{
  border-radius:50%;
}}
  a{
   background-color:white;
   width:78%;
   height:50px;
   border-radius: 50px;
   margin-left: 10px;
   display:flex;
   align-items:center;
   justify-content:start;
   padding-left:25px;
  }
  }
`;

const Article = styled(MainCard)`
padding:0;
margin:0 0 10px;
overflow:visible;
`;


const Post = styled.div`
  background-color: #f0e1d2;
  flex-wrap:nowrap;
  padding:12px 16px 0px;
  margin-bottom:10px;
  display:flex;
  align-items:center;
  a{
  margin-right:12px;
  flex-grow:1;
  overflow:hidden;
  display:flex;
  img{
  width: 58px;
  height:58px;
  }
   div{
   display:flex;
   flex-direction:column;
   flex-grow:1;
   flex-basis:0;
   margin-left:15px;
   overflow:hidden;
   background-color: #f0e1d2;
   span{
   background-color: #f0e1d2;
   text-align:left;
   font-size:17px;
   font-weight:600;
   }
   }
   }
  button{
  border:none;
  outline:none;
  position:absolute;
  right:12px;
  top:17px;
  background: #f0e1d2;
  }
`;

const Description = styled.div`
background-color: #f0e1d2;
padding:5px 17px;
overflow-hidden;
font-size:18px;
font-weight:600;
text-align:left;
`;
const PostImage = styled.div`
margin-top:9px;
width:100%;
display:block;
position:relative;
background-color:#f0e1d2;
img{
object-fit: fill;
width:100%;
height:100%;
}
`;
const Likes = styled.ul`
background-color: #f0e1d2;
list-style:none;
line-height:1.5;
display:flex;
align-items:center;
overflow:auto;
justify-content:space-between;
margin: 1px 16px;
padding: 9px 0px;
border-bottom: 1px solid rgb(114, 47, 28);
font-size: 17px;
font-weight: 500;
li{
background-color: #f0e1d2;
button{
background-color: #f0e1d2;
 border:1px solid rgb(114, 47, 28);
 border-radius: 50px;
// outline:none;
font-size: 17px;
font-weight: 500;
span{
background-color: #f0e1d2;}
}
img{
width:30px;
height:30px;
margin-right: 8px;
}
}
`;
const Activity = styled.div`
display:flex;
background-color: #f0e1d2;
align-items:center;
justify-content:space-between;
box-sizing: border-box;
  button{
  display:flex;
  align-items:center;
  outline:none;
  border:none;
  padding-right: 8px;
  border-right: 1px solid rgb(114, 47, 28);
  margin: 0px 5px;
  background-color: #f0e1d2;
  img{
  width:38px;
  }
  span{
  background-color: #f0e1d2;
  font-size:15px;
  font-weight:500;
  }
  }`;
