import customAxios from '../lib/customAxios';
import { SigninResponse, UserForm } from '../types/auth';

const authAPI = () => {
  const signup = async (userInfo: UserForm): Promise<void> => {
    const { data } = await customAxios.post('/auth/signup', userInfo);
    return data;
  };

  const signin = async (userInfo: UserForm): Promise<SigninResponse> => {
    const { data } = await customAxios.post('/auth/signin', userInfo);
    return data;
  };

  return { signup, signin };
};

export default authAPI();
