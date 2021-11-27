import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <Background>
        <img
          src="https://www.cnet.com/a/img/aO_RmaVCGonwzEKpnRZU4u6srf4=/940x0/2019/10/01/bcc42da1-bdad-456d-b7bd-c06731913d95/frozen-2-image.jpg"
          alt="#"
        />
      </Background>
      <ImageTitle>
        <img src="/images/frozen2.png" alt="lo" />
      </ImageTitle>
      <Controls>
        <PlayButton>
            <img src="/images/play-icon-black.png" />
            <span >Play</span>
        </PlayButton>
        <TrailerButton>
        <img src="/images/play-icon-white.png" />
        <span >Trailer</span>
        </TrailerButton>
        <AddButton><span>+</span></AddButton>
        <GroupWatchButton>
            <img src="/images/group-icon.png"/> 
            </GroupWatchButton>{" "}
      </Controls>
      <SubTitle>
          1hr 44min . 2019 . Animation . U/A 7+
      </SubTitle>
      <Description>
          Why was elsa born with magical powers? Together with Kristof, Olaf and Sven, she sets out on a dangerous but remarkable journey to find the answer.
      </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`

  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;
const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
margin-top:2em;
display:flex;
align-items:center;
// justify-content:center;
`

const PlayButton = styled.button`
border-radius:4px;
display:flex;
align-items:center;
font-size:1em;
border:none;
padding:0 1.2em;
margin-right:1em;
cursor:pointer;
text-transform:uppercase;
&:hover{
    background:rgb(198,198,198);
}
`

const TrailerButton = styled(PlayButton)`
background:rgba(0,0,0,0.3);
border:1px solid white;
color:white;

`;
const AddButton = styled.button`
width:2em;
height:2em;
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
border:1px solid white;
background:rgba(0,0,0,0.6);
margin-right:1em;
cursor:pointer;
span{
   font-size:1.5em; 
   color:white;
}`;
const GroupWatchButton = styled(AddButton)`
// font-size:1em;
img{
    width:100%;
    height:100%;
    object-fit:cover;
}
`;

const SubTitle = styled.div`
margin-top:1em;
`

const Description = styled.div`
font-size:1.1em;
margin-top:1em;
`