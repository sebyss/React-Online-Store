import React from "react";
import styled from "styled-components";
import { Carousel } from "antd";

const Home = () => {
  return (
    <Page>
      <StyledCarousel autoplay dotPosition="top">
        <div>
          <h3>11</h3>
        </div>
        <div>
          <h3>222222</h3>
        </div>
        <div>
          <h3>333333</h3>
        </div>
        <div>
          <h3>4444444</h3>
        </div>
      </StyledCarousel>
    </Page>
  );
};

const Page = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledCarousel = styled(Carousel)`
  height: 160px;
  overflow: hidden;
  text-align: center;
  line-height: 160px;
  background-color: #364d79;
  color: red;
`;

export default Home;
