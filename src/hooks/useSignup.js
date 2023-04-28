import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

import { signFormValidator } from '../utils/validation';
import authAPI from '../api/authAPI';
import { AXIOS_RESULT } from '../constant/constant';

const useSignup = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(signFormValidator(userInfo));
  }, [userInfo]);

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await authAPI.signup(userInfo);
      window.alert(AXIOS_RESULT.SIGN_UP_SUCCESS);
      navigate('/signin');
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