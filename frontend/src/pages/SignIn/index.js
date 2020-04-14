import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { Form, Input } from '@rocketseat/unform';
import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="FastFeet" width="250" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          label="SEU E-MAIL"
          placeholder="exemplo@email.com"
        />
        <Input
          name="password"
          type="password"
          label="SUA SENHA"
          placeholder="***********"
        />

        <button type="submit">
          {loading ? 'Carregando...' : 'Entrar no sistema'}
        </button>
      </Form>
    </>
  );
}
