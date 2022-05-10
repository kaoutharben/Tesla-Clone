import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {

  return (
    <Container>
      <Section
        title="Model S"
        backgroundImg="model-s.jpg"
        description="Order Online For Touchless Delivery"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
      />
      <Section
        title="Model Y"
        backgroundImg="model-y.jpg"
        description="Order Online For Touchless Delivery"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
      />
      <Section
        title="Model 3"
        backgroundImg="model-3.jpg"
        description="Order Online For Touchless Delivery"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
      />
      <Section
        title="Model X"
        backgroundImg="model-x.jpg"
        description="Order Online For Touchless Delivery"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
      />
       <Section
        title="Solar Panels"
        backgroundImg="solar-panel.jpg"
        description="Lowest Cost Solar Panels in America"
        leftBtnTxt="Order Now"
        rightBtnTxt="Learn More"
      />
       <Section
        title="Solar For New Roofs"
        backgroundImg="solar-roof.jpg"
        description="Lowest Cost Solar Panels in America"
        leftBtnTxt="Order Now"
        rightBtnTxt="Learn More"
      />
       <Section
        title="Accessories"
        backgroundImg="accessories.jpg"
        leftBtnTxt="Shop Now"
        
      />
    </Container>
  );
}

export default Home;
const Container = styled.div`
  height: 100vh;
`;
