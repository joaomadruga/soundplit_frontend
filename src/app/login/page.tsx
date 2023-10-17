'use client';

import React from 'react';
import Input from '../../../components/input';
import Button from '../../../components/button';
import { Page, Record } from './style';

function LoginPage() {
  return (
    <Page>
      <form action="#" method="POST">
        <Input placeholder="Insira seu email" type="email" label="Email" />
        <Input placeholder="Insira sua senha" type="password" label="Senha" />
        <Button text="Entrar" />
      </form>
      <Record />
    </Page>
  );
}

export default LoginPage;
