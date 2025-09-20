import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
  return (
    <div className="homePage">
      {/* HEADER */}
      <header className="homeNav">
        <img src="/logo.jpg" alt="logo" width="40" />
        <nav className="homeMenu">
          <Link to="/cursos">cursos</Link>
          <Link to="/andar">atrações</Link>
          <Link to="/data">data e hora</Link>
          <Link to="/login">login</Link>
          <Link to="/inscricao">inscricao</Link>
           <Link to="/vincular">vincular e buscar visitante</Link>
        </nav>
        <img src="/icone.png" alt="icone" width="100" />
      </header>

      {/* CONTEÚDO */}
      <div className="homeOverlapWrapper">
        <div className="homeOverlap">
          {/* Fundo */}
          <div className="homeRectangle"></div>

          {/* Imagem principal */}
          <img
            className="homeMGEditada"
            src="/inicio.jpg"
            alt="Pessoa sorrindo"
          />

          {/* Card amarelo */}
          <div className="homeCard">  
            {/* Título */}
            <div className="homeGroup">
              <div className="homeGroup2">
                <div className="homeTitle">Feira de profissões</div>
              </div>
            </div>

            {/* Texto */}
            <p className="homeSubtitle">Venha participar da nossa 5° feira de profissões!</p>

            {/* Frase */}
            <p className="homeQuote">
              “esforço que transforma,
              <br />
              e o orgulho permanece.”
            </p>

            {/* Botão */}
            <a href="/inscricao" className="homeBtn">inscreva-se →</a>

            <img className="home-tri" src="/tri-amarelo.png" alt="" />

          
        </div>
      </div>
    </div>

    </div>
  );
}

export default Home;