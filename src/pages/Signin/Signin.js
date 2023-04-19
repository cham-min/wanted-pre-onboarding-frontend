import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';

import API from '../../api/api';
import useInput from '../../hooks/useInput';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();

  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const isValid = email.includes('@') && password.length >= 8;

  const onSubmit = useCallback(
    async e => {
      e.preventDefault();

      try {
        const res = await axios.post(`${API.SIGNIN}`, {
          headers: { 'Content-Type': 'application/json' },
          email: email,
          password: password,
        });
        const token = res.data.access_token;
        localStorage.setItem('access_token', token);
        if (token) navigate('/todo');
      } catch (error) {
        console.error(error);
      }
    },
    [navigate, email, password]
  );

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) return navigate('/todo');
  }, [navigate]);

  return (
    <SigninContainer>
      <SigninWrapper>
        <Logo>
          <h1 style={{ fontSize: '25px' }}>Wanted TODO</h1>
        </Logo>
        <Form onSubmit={onSubmit}>
          <FormDiv>
            <label htmlFor="user-email">이메일</label>
            <FormInput
              name="user-email"
              type="email"
              value={email}
              onChange={onChangeEmail}
              placeholder="example@naver.com"
              data-testid="email-input"
              required
            />
          </FormDiv>
          <FormDiv>
            <label htmlFor="user-password">패스워드</label>
            <FormInput
              name="user-password"
              type="password"
              value={password}
              onChange={onChangePassword}
              placeholder="비밀번호 8자 이상"
              data-testid="password-input"
              required
            />
          </FormDiv>
          <FormDiv>
            <FormButton
              type="submit"
              disabled={!isValid}
              data-testid="signin-button"
            >
              로그인
            </FormButton>
          </FormDiv>
        </Form>
        <SignParagraph>
          회원이 아닌 경우
          <a
            href="/signup"
            style={{
              paddingLeft: '0.5rem',
              fontWeight: 'bold',
              color: '#658dc6',
            }}
          >
            회원가입
          </a>
        </SignParagraph>
      </SigninWrapper>
    </SigninContainer>
  );
};

const SigninContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SigninWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  display: flex;
  flex-direction: column;
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

const SignParagraph = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export default Signin;
