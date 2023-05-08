export const getToken = (tokenKey: string) => {
  return localStorage.getItem(tokenKey);
};

export const setToken = (tokenKey: string, token: any) => {
  return localStorage.setItem(tokenKey, token);
};

export const removeToken = (tokenKey: string) => {
  return localStorage.removeItem(tokenKey);
};
