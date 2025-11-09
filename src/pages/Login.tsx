import React, { useState } from 'react';
// @ts-ignore
import './login.css'; 


import { Figma, X, Instagram, Youtube, Linkedin } from 'lucide-react';

export function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    alert(`Email: ${email}\nSenha: ${senha}`);
  }

  return (
    <div className="full-page-layout">
      <header className="page-header">
        
        <Figma size={28} className="header-logo" /> 
      </header>

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