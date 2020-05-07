import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import heroPicture from "../images/heroPicture.jpg";

const Home = () => {
  return (
    <Page>
      <HeroSection>
        <Image src={heroPicture} alt="" />
        <TextContainer>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
            similique doloremque asperiores fugiat dolorum aut exercitationem
            dignissimos neque ullam necessitatibus, cum incidunt hic eos, dolor
            corporis illum ipsa iure reiciendis?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aspernatur possimus maiores omnis
            alias fuga quasi aut suscipit amet quod repudiandae ex nemo
            voluptate blanditiis, necessitatibus, sapiente ut doloribus saepe
            veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Explicabo ipsum quo at velit, minus eum dolor in sequi aspernatur,
            repellendus blanditiis consectetur dolorem maiores enim. Officia
            voluptatum aspernatur eaque ad.
          </p>
        </TextContainer>

        <ButtonContainer>
          <StyledButton type="ghost"> Magazin >> </StyledButton>
        </ButtonContainer>
      </HeroSection>
      <Button />
    </Page>
  );
};

const Page = styled.div`
  padding-left: 300px;
  padding-right: 300px;
`;

const HeroSection = styled.div`
  height: 500px;
  background: blue;
  margin-top: 100px;
  position: relative;
`;

const TextContainer = styled.div`
  margin-top: 50px;
  width: 50%;
  height: 200px;
  overflow: hidden;
  margin-left: 10%;
  position: absolute;
  font-size: 30px;
  font-weight: bold;
  color: #faedde;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-top: 300px;
`;

const StyledButton = styled(Button)`
  width: 125px;
  height: 50px;
  border-color: black;
  font-weight: bold;

  &:hover {
    border-color: #faedde;
    color: #faedde;
  }
  &:focus {
    border-color: #faedde;
    color: #faedde;
  }
`;

export default Home;
