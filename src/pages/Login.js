import React from 'react';
import logo from '../assets/logo/logo.svg'

export const Login = () => {
  return (
    <div>
      <img src={logo} alt="logo" />
      <form action="">
        <input type="text" name="login" placeholder="Informe seu email" />
        <input type="password" name="senha" placeholder="Informe sua senha" />
        <button>Login</button>
      </form>
    </div>
  );
}
