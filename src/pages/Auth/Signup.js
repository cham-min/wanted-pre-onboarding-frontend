import React from 'react';
import styled from 'styled-components';

import useSignup from '../../hooks/useSignup';
import SignForm from '../../components/Auth/SignForm';

const Signup = () => {
  const { userInfo, isValid, handleSubmit, handleChange } = useSignup();

  return (
    <SignupContainer>
      <SignForm
        title="회원가입"
        userInfo={userInfo}
        isValid={isValid}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <SignParagraph>
        <a
          href="/signin"
          style={{
            paddingLeft: '0.5rem',
            fontWeight: 'bold',
            color: '#658dc6',
          }}
        >
          로그인 페이지 이동
        </a>
      </SignParagraph>
    </SignupContainer>
  );
};

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SignParagraph = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export default Signup;
