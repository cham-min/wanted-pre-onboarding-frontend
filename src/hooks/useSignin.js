import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

import authAPI from '../api/authAPI';
import { signFormValidator } from '../utils/validation';
import { setToken } from '../utils/token';

import { AXIOS_RESULT, TOKEN_KEY } from '../constant/constant';

const useSignup = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const isValid = signFormValidator(userInfo);

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const { access_token } = await authAPI.signin(userInfo);
      setToken(TOKEN_KEY, access_token);
      window.alert(AXIOS_RESULT.SIGN_IN_SUCCESS);
      navigate('/todo');
    } catch (error) {
      console.error(error);
      if (error instanceof AxiosError) {
        const errorMessage = error?.response.data.message;
        window.alert(errorMessage);
      }
    }
  };

  const handleChange = ({ target }) => {
    setUserInfo(prev => ({ ...prev, [target.name]: target.value }));
  };

  return {
    isValid,
    userInfo,
    handleSubmit,
    handleChange,
  };
};

export default useSignup;
