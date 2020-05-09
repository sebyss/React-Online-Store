import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.png'
import { Button } from 'antd'
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import { withRouter } from 'react-router-dom'

const Navbar = ({ history }) => {
  return (
    <NavbarContainer>
      <LogoContainer src={logo}></LogoContainer>
      <ButtonsContainer>
        <StyledButton type="ghost" onClick={() => history.push('/')}>
          Home
        </StyledButton>
        <StyledButton type="ghost" onClick={() => history.push('/products')}>
          Produse
        </StyledButton>
        <StyledButton type="ghost">Contact</StyledButton>
      </ButtonsContainer>
      <IconsContainer>
        <CartIcon />
        <UserIcon />
      </IconsContainer>
    </NavbarContainer>
  )
}

export default withRouter(Navbar)

const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
`

const LogoContainer = styled.img`
  width: 100px;
  height: 100%;
  background-color: #2e2538;
`

const ButtonsContainer = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
`

const StyledButton = styled(Button)`
  border-radius: 100px;
  border-color: black;
  color: black;
  margin-left: 5px;

  &:hover {
    border-color: #faedde;
    color: #faedde;
    box-shadow: 0 0 1px #faedde;
  }
  &:focus {
    border-color: #faedde;
    color: #faedde;
  }
`

const IconsContainer = styled.div`
  display: flex;
  flex: 1;
  margin-left: 30px;
  align-items: center;
  justify-content: flex-end;
`

const CartIcon = styled(ShoppingCartOutlined)`
  font-size: 25px;
  color: black;

  &:hover {
    color: #faedde;
    cursor: pointer;
  }
  &:focus {
    color: #faedde;
  }
`

const UserIcon = styled(UserOutlined)`
  font-size: 25px;
  color: black;
  margin-left: 20px;

  &:hover {
    color: #faedde;
    cursor: pointer;
  }
  &:focus {
    color: #faedde;
  }
`
