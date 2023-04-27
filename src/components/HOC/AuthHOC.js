import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * 페이지별 접근 인증 HOC
 * @param Component 컴포넌트
 * @param {boolean} option true: 로그인 유저만 출입 가능한 페이지, false: 비로그인 유저도 출입 가능한 페이지
 * @returns auth 인증된 컴포넌트
 */
const AuthHOC = (Component, option) => {
  const AuthChecked = () => {
    const token = localStorage.getItem('access_token');
    const navigate = useNavigate();

    useEffect(() => {
      if (!token) {
        if (option) {
          navigate('/signin');
        }
      } else {
        navigate('/todo');
      }
    }, [navigate, token]);

    return <Component />;
  };

  return AuthChecked;
};

export default AuthHOC;
