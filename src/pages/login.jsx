import React from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

function Login() {
  return (
    <div className="login-frame">
      <div className="login-overlap-wrapper">
        <div className="login-overlap">
          <img className="login-fei-bg" src="login.jpg" alt="FEI 2024" />
          
          {/* Cabeçalho */}
          <header className="nav">
            <img src="logo.jpg" alt="logo" width="40" />
            <nav className="menu">
              <Link to="/">página inicial</Link>
              <Link to="/cursos">cursos</Link>
                <Link to="/data">data e local</Link>
              <Link to="/andar">atrações</Link>
              <Link to="/inscricao">inscrição</Link>
               <Link to="/vincular">vincular e buscar visitante</Link>
          
            </nav>
            <img src="icone.png" alt="icone" width="40" />
          </header>

           
          
          {/* Formulário de Login */}
          <div className="login-form-container">
            <div className="login-form-bg"></div>
            
            <div className="login-form-content">
              <div className="login-title">LOGIN</div>
              
              <div className="login-input-group">
                <div className="login-input-label">EMAIL</div>
                <input type="email" className="login-input-field" placeholder="Digite seu email" />
              </div>
              
              <div className="login-input-group">
                <div className="login-input-label">SENHA</div>
                <input type="password" className="login-input-field" placeholder="Digite sua senha" />
              </div>

             
              
              <button type="submit" className="login-submit-button">ENTRAR</button>
            </div>
          </div>
        </div>
      </div>
     <img className="login-tri" src="/tri-azul.png" alt="" />
    </div>
  );
}

export default Login;