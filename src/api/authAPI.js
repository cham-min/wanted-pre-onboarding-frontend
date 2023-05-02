import customAxios from '../lib/customAxios';

const authAPI = () => {
  const signup = async userInfo => {
    const { data } = await customAxios.post('/auth/signup', userInfo);
    return data;
  };

  const signin = async userInfo => {
    const { data } = await customAxios.post('/auth/signin', userInfo);
    return data;
  };

  return { signup, signin };
};

export default authAPI();
