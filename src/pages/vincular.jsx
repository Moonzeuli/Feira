import React from "react";
import { Link } from "react-router-dom";
import "../styles/vincular.css";

function Vincular() {
  return (
    <>
      {/* Navbar */}
       <header className="nav">
              <img src="/logo.jpg" alt="logo" width="40" />
              <nav className="menu">
                <Link to="/">página inicial</Link>
                <Link to="/andar">atrações</Link>
                <Link to="/data">data e hora</Link>
                <Link to="/inscricao">inscrição</Link>
                <Link to="/login">login</Link>
                 <Link to="/vincular">vincular e buscar visitante</Link>
              </nav>
              <img src="/selo.png" alt="icone" width="100" />
            </header>
      

      {/* Container principal */}
      <div className="buscar-container">
        <div className="main-content">
          {/* Buscar visitante */}
          <div className="search-section">
            <h2>BUSCAR VISITANTE</h2>
            <div className="search-box">
              <div className="input-group">
                <label>Digite nome ou CPF</label>
                <input type="text" placeholder="Digite nome ou CPF" />
              </div>
              <button className="search-button">BUSCAR</button>
            </div>
          </div>

          {/* Dados do visitante */}
          <div className="visitor-data">
            <h2>VINCULAR VISITANTE</h2>
            <div className="data-row">
              <div className="data-field">
                <label>Nome:</label>
                <div className="data-value">João Silva</div>
              </div>
              <div className="data-field">
                <label>CPF:</label>
                <div className="data-value">123.456.789-00</div>
              </div>
            </div>
            <div className="data-row">
              <div className="data-field">
                <label>ID Visitante:</label>
                <div className="data-value">123456789-0</div>
              </div>
              <div className="data-field">
                <label>QR Code:</label>
                <div className="data-value">QR12345</div>
              </div>
            </div>
            <button className="finalize-button">FINALIZAR VINCULAÇÃO</button>
          </div>
        </div>

        {/* Elementos decorativos */}
        <div className="el-1"></div>
        <div className="el-2"></div>
        <div className="el-3"></div>
      </div>
    </>
  );
}

export default Vincular;
