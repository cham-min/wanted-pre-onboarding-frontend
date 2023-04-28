import React from 'react';
import styled from 'styled-components';

const SignForm = ({ title, userInfo, isValid, handleSubmit, handleChange }) => {
  const signList = {
    회원가입: 'signup-button',
    로그인: 'signin-button',
  };

  return (
    <SignContainer>
      <Logo>
        <h1 style={{ fontSize: '25px' }}>Wanted TODO</h1>
      </Logo>
      <Form onSubmit={handleSubmit}>
        <FormDiv>
          <label htmlFor="email">이메일</label>
          <FormInput
            name="email"
            type="email"
            value={userInfo.email}
            onChange={handleChange}
            placeholder="example@naver.com"
            data-testid="email-input"
            required
          />
        </FormDiv>
        <FormDiv>
          <label htmlFor="password">패스워드</label>
          <FormInput
            name="password"
            type="password"
            value={userInfo.password}
            onChange={handleChange}
            placeholder="비밀번호 8자 이상"
            data-testid="password-input"
            required
          />
        </FormDiv>
        <FormDiv>
          <FormButton
            type="submit"
            disabled={!isValid}
            data-testid={signList[title]}
          >
            {title}
          </FormButton>
        </FormDiv>
      </Form>
    </SignContainer>
  );
};

const SignContainer = styled.div`
  width: 22rem;
  padding: 2rem;
  border: 1px solid gray;
  border-radius: 1rem;
`;

const Logo = styled.header`
  display: flex;
  justify-content: center;
  padding: 1rem 0rem;
`;

const Form = styled.form`
  justify-content: center;
  align-items: center;
`;

const FormDiv = styled.div`
  width: 100%;
  padding: 0.7rem 0rem;
`;

const FormInput = styled.input`
  width: 100%;
  height: 2.2rem;
  padding: 0.5rem;
`;

const FormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2.5rem;
  border: 1px solid black;
  background-color: #658dc6;
  font-weight: bold;
`;

export default SignForm;
