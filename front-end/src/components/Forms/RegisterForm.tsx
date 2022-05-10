import React, { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ThemeContext } from '../../contexts/contextIndex';
import * as St from './Form.styled';

const schema = yup.object({
  username: yup.string().required().min(5),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

type FormTypes = yup.InferType<typeof schema>;

const RegisterForm = () => {
  const { theme } = useContext(ThemeContext);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormTypes>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormTypes> = (data) => {
    [
      {
        type: 'manual',
        name: 'username',
        message: 'Double Check This',
      },
      {
        type: 'manual',
        name: 'firstName',
        message: 'Triple Check This',
      },
    ].forEach(({ name, type, message }) => setError(name, { type, message }));
    
    console.log(data);
  };

  return (
    <St.Container>
      <St.Form onSubmit={handleSubmit(onSubmit)}>
        <St.Label>Username</St.Label>
        <St.Input
          {...(register('username'), { required: true })}
          theme={theme}
        />
        {errors.username && <span>{errors.username.message}</span>}
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
