import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppRoute = ({ ...restProps }) => {
  return (
    <Container>
      <PageContainer>
        <Navbar />
        <Route {...restProps} />
        <Footer />
      </PageContainer>
    </Container>
  );
};

export default AppRoute;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding-left: 200px;
  padding-right: 200px;
`;

const PageContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
