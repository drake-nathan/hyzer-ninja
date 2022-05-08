import React, { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ThemeContext } from '../../contexts/contextIndex';
import * as St from './Form.styled';

interface IFormInput {
  username: string;
  email: string;
  password: string;
  paypal: string;
}

const RegisterForm = () => {
  const { theme } = useContext(ThemeContext);
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <St.Container>
      <St.Form onSubmit={handleSubmit(onSubmit)}>
        <St.Label>Username</St.Label>
        <St.Input
          {...(register('username'), { required: true })}
          theme={theme}
        />
        <St.Label>Email</St.Label>
        <St.Input {...(register('email'), { required: true })} theme={theme} />
        <St.Label>Password</St.Label>
        <St.Input
          {...(register('password'), { required: true })}
          theme={theme}
          type="password"
        />
        <St.SubmitButton type="submit" theme={theme}>
          Submit
        </St.SubmitButton>
      </St.Form>
    </St.Container>
  );
};

export default RegisterForm;
