import { UserForm } from '../types/auth';

export const signFormValidator = (data: UserForm): boolean => {
  return data.email.includes('@') && data.password.length >= 8;
};
