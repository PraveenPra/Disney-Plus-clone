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
        <PlayButton></PlayButton>
        <TrailerButton></TrailerButton>
        <AddButton></AddButton>
        <GroupWatchButton></GroupWatchButton>{" "}
      </Controls>
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

const Controls = styled.div``;
const PlayButton = styled.div``;
const TrailerButton = styled.div``;
const AddButton = styled.div``;
const GroupWatchButton = styled.div``;