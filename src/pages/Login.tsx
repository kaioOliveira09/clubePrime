import React, { useState } from 'react';

import  './login.css';

import { X, Instagram, Youtube, Linkedin } from 'lucide-react';

// Componente principal de Login
export function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Lógica de login
  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    console.log(`Tentativa de Login:\nEmail: ${email}\nSenha: ${senha}`);

  }

  return (
    <div className="full-page-layout">
      <div className='header'>

          {/* LOGO */}
          <img src="/img/logo.svg" alt="Logo da Empresa" className="logo"  width={60}/>
        
      </div>
      <main className="main-content">
        <div className="login-card">
          <h2>Faça o login</h2>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Value"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="senha">Senha</label>
              <input
                id="senha"
                type="password"
                placeholder="Value"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-button">Entrar</button>
          </form>
        </div>
      </main>

      <footer className="page-footer">
        <div className="social-icons">
          <X size={20} />
          <Instagram size={20} />
          <Youtube size={20} />
          <Linkedin size={20} />
        </div>
      </footer>
    </div>
  );
}

export default Login;