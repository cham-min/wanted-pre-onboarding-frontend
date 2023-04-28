import customAxios from '../lib/customAxios';

const authAPI = () => {
  const signup = async userInfo => {
    const result = await customAxios.post('/auth/signup', userInfo);
    return result.data;
  };

  const signin = async userInfo => {
    const result = await customAxios.post('/auth/signin', userInfo);
    return result.data;
  };

  return { signup, signin };
};

export default authAPI();
