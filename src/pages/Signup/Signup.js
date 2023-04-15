import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import API from '../../api/api';
import useInput from '../../hooks/useInput';

const Signup = () => {
  const navigate = useNavigate();

  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const isValid = email.includes('@') && password.length >= 8;

  const onSubmit = async e => {
    e.preventDefault();

    try {
      await axios.post(`${API.SIGNUP}`, {
        headers: { ' Content-Type': 'application/json' },
        email: email,
        password: password,
      });
      navigate('/signin');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) navigate('/todo');
  }, [navigate]);

  return (
    <SignupContainer>
      <SignupWrapper>
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
              required
            />
          </FormDiv>
          <FormDiv>
            <FormButton type="submit" disabled={!isValid}>
              회원가입
            </FormButton>
          </FormDiv>
        </Form>
        <SignParagraph>
          이미 회원인 경우
          <a
            href="/signin"
            style={{
              paddingLeft: '0.5rem',
              fontWeight: 'bold',
              color: '#658dc6',
            }}
          >
            로그인
          </a>
        </SignParagraph>
      </SignupWrapper>
    </SignupContainer>
  );
};

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SignupWrapper = styled.div`
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

export default Signup;
