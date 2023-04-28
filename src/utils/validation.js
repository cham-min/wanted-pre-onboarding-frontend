export const signFormValidator = data => {
  return data.email.includes('@') && data.password.length >= 8;
};
