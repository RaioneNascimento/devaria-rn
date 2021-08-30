import React from 'react';
import logo from '../assets/logo/logo.svg';
import mail from '../assets/logo/mail.svg';
import lock from '../assets/logo/lock.svg';

export const Login = () => {
  return (
    <div className="container-login">
      <img src={logo} alt="logo" className="logo" />
      <form>
        <div className="input">
          <img src={mail} alt="ícone e-mail" />
          <input type="text" name="login" placeholder="Informe seu email" />
        </div>
        <div className="input">
          <img src={lock} alt="ícone cadeado" />
          <input type="password" name="senha" placeholder="Informe sua senha" />
        </div>

        <button>Login</button>
      </form>
    </div>
  );
}
