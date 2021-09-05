import React, { useState } from 'react';
import logo from '../assets/logo/logo.svg';
import mail from '../assets/logo/mail.svg';
import lock from '../assets/logo/lock.svg';
import { Input } from '../components/input';

export const Login = () => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [isLoading, setLoading] = useState(false);

  const consultaLogin = evento => {
    evento.preventDefault();
    setLoading(true);
    console.log(login);
    console.log(senha);

    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }

  return (
    <div className="container-login">
      <img src={logo} alt="logo" className="logo" />
      <form>
        <Input
          srcImg={mail}
          altImg={"Icone email"}
          inputType="text"
          inputName="login"
          inputPlaceholder="Informe seu email"
          value={login}
          setValue={setLogin}
        />

        <Input
          srcImg={lock}
          altImg={"Icone cadeado"}
          inputType="password"
          inputName="senha"
          inputPlaceholder="Informe sua senha"
          value={senha}
          setValue={setSenha}
        />

        <button onClick={consultaLogin} disabled={isLoading}>{isLoading === true ? '... Carregando' : 'Entrar'}</button>
      </form>
    </div>
  );
}
