import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({
  title,
  backgroundImg,
  description,
  leftBtnTxt,
  rightBtnTxt,
}) {

  return (
    <Wrap backImg={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <DownSide>
        
          <ButtonGroup>
          <Fade left>
            <LeftButton>{leftBtnTxt}</LeftButton>
            </Fade>
            {rightBtnTxt && <Fade right><RightButton>{rightBtnTxt}</RightButton></Fade>}
          </ButtonGroup>
        
        <DownArrow src="images/down-arrow.svg" />
      </DownSide>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/images/model-s.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.backImg}")`};
`;
const ItemText = styled.div`
  padding-top: 20vh;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  color: white;
  height: 40px;
  width: 256px;
  margin: 8px;
  display: flex;
  justify-content: center; //center flex content horizontally
  align-items: center; //center flex content vertically
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
`;
const RightButton = styled(LeftButton)`
  background: white;
  color: black;
  opacity: 0.65;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animationDown infinite 1.5s;
`;
const DownSide = styled.div``;
