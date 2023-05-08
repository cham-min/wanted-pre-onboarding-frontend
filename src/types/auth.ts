import { ChangeEvent, FormEvent } from 'react';

export interface UserForm {
  email: string;
  password: string;
}

export interface SignFormProps {
  title: string;
  userInfo: UserForm;
  isValid: boolean;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface SigninResponse {
  access_token: string;
}
