import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

import { signFormValidator } from '../utils/validation';
import authAPI from '../api/authAPI';
import { AXIOS_RESULT } from '../data/constant';
import { UserForm } from '../types/auth';

const useSignup = () => {
  const [userInfo, setUserInfo] = useState<UserForm>({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const isValid = signFormValidator(userInfo);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await authAPI.signup(userInfo);
      window.alert(AXIOS_RESULT.SIGN_UP_SUCCESS);
      navigate('/signin');
    } catch (error) {
      console.error(error);
      if (error instanceof AxiosError) {
        const errorMessage = error?.response?.data.message;
        window.alert(errorMessage);
      }
    }
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
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
