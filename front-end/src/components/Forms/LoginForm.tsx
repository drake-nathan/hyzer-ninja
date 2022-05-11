import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ThemeContext, LoginContext } from '../../contexts/contextIndex';
import * as St from './Form.styled';

const loginSchema = yup.object({
  username: yup.string(),
  password: yup.string(),
});

type FormTypes = yup.InferType<typeof loginSchema>;

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const { setIsLoggedIn } = useContext(LoginContext);
  const { register, handleSubmit } = useForm<FormTypes>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<FormTypes> = () => {
    setIsLoggedIn(true);
    navigate(-1);
  };

  return (
    <St.Container>
      <St.Form onSubmit={handleSubmit(onSubmit)}>
        <St.Label>Username</St.Label>
        <St.Input {...register('username')} theme={theme} />
        <St.Label>Password</St.Label>
        <St.Input {...register('password')} theme={theme} type="password" />
        <St.SubmitButton type="submit" theme={theme}>
          Login
        </St.SubmitButton>
      </St.Form>
    </St.Container>
  );
};

export default LoginForm;
