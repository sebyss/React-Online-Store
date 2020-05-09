import React from 'react'
import styled from 'styled-components'
import { Button } from 'antd'
import heroPicture from '../images/heroPicture.jpg'

const Home = () => {
  return (
    <Page>
      <HeroSection>
        <Image src={heroPicture} alt="" />
        <TextContainer>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil similique doloremque
            asperiores fugiat dolorum aut exercitationem dignissimos neque ullam necessitatibus, cum
            incidunt hic eos, dolor corporis illum ipsa iure reiciendis?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aspernatur possimus maiores omnis alias fuga quasi aut
            suscipit amet quod repudiandae ex nemo voluptate blanditiis, necessitatibus, sapiente ut
            doloribus saepe veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Explicabo ipsum quo at velit, minus eum dolor in sequi aspernatur, repellendus
            blanditiis consectetur dolorem maiores enim. Officia voluptatum aspernatur eaque ad.
          </p>
        </TextContainer>

        <ButtonContainer>
          <StyledButton type="ghost"> Magazin >> </StyledButton>
        </ButtonContainer>
      </HeroSection>
      <Button />
    </Page>
  )
}

const Page = styled.div`
  padding-top: 30px;
  min-height: 100vh;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const HeroSection = styled.div`
  height: 500px;
  background: blue;
  margin-top: 30px;
  position: relative;
  border-radius: 20px;
  box-shadow: 0 0 10px black;
`

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
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 20px;
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-top: 300px;
`

const StyledButton = styled(Button)`
  width: 125px;
  height: 50px;
  border-color: black;
  font-weight: bold;

  &:hover {
    border-color: #faedde;
    color: #faedde;
    box-shadow: 0 0 6px black;
  }
  &:focus {
    border-color: #faedde;
    color: #faedde;
  }
`

export default Home
