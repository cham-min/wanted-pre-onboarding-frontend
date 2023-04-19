import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Main = () => {
  const navigate = useNavigate();

  const navigateSignup = () => {
    navigate('signup');
  };

  return (
    <MainContainer>
      <MainBox onClick={navigateSignup}>TODO 시작하기</MainBox>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const MainBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 5rem;
  border: 1px solid black;
  border-radius: 1rem;
  background-color: #658dc6;
  cursor: pointer;
`;

export default Main;
