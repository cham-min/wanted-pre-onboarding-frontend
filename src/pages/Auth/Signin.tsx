import styled from 'styled-components';

import useSignin from '../../hooks/useSignin';
import SignForm from '../../components/Auth/SignForm';

const Signin = () => {
  const { userInfo, isValid, handleSubmit, handleChange } = useSignin();

  return (
    <SigninContainer>
      <SignForm
        title="로그인"
        userInfo={userInfo}
        isValid={isValid}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <SignParagraph>
        <a
          href="/signup"
          style={{
            paddingLeft: '0.5rem',
            fontWeight: 'bold',
            color: '#658dc6',
          }}
        >
          회원가입 페이지 이동
        </a>
      </SignParagraph>
    </SigninContainer>
  );
};

const SigninContainer = styled.div`
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

export default Signin;
