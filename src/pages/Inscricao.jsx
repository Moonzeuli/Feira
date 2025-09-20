import React from "react";
import "../styles/Inscricao.scss";
import { Link } from "react-router-dom";

function Inscricao() {
  return (
    <div className="inscricao">
      <div className="inscricao__container">
        {/* Fundo azul */}
        <div className="inscricao__bg"></div>

        {/* Cabeçalho */}
        <header className="nav">
          <img src="logo.jpg" alt="logo" width="40" />
          <nav className="menu">
            <Link to="/">página inicial</Link>
            <Link to="/cursos">cursos</Link>
            <Link to="/andar">atrações</Link>
            <Link to="/data">data e local</Link>
            <Link to="/login">login</Link>
            <Link to="/vincular">vincular e buscar visitante</Link>
          </nav>
          <img src="icone.png" alt="icone" width="40" />
        </header>

        {/* Título */}
        <h1 className="inscricao__title">SE INTERESSOU?</h1>
        <p className="inscricao__subtitle">
          Faça sua inscrição e agilize sua entrada!
        </p>

        {/* Elementos decorativos */}
        <div className="inscricao__ellipse yellow"></div>
        <div className="inscricao__ellipse blue"></div>
        <img className="inscricao__intersect" src="/intersect.png" alt="" />
        <div className="inscricao__image-bg"></div>

        {/* Formulário */}
        <form className="inscricao__form">
          <label>
            NOME <span>*</span>
            <input type="text" placeholder="Digite seu nome" />
          </label>

          <label>
            ESCOLARIDADE
            <input type="text" placeholder="Ensino médio, técnico..." />
          </label>

          <label>
            CURSO DE INTERESSE
            <input type="text" placeholder="Digite o curso" />
          </label>

          <label>
            PREVISÃO DE CHEGADA
            <input type="time" />
          </label>

          <label>
            EMAIL
            <input type="email" placeholder="seuemail@email.com" />
          </label>

          <label>
            COMO CONHECEU A FEIRA?
            <input type="text" placeholder="Indicação, redes sociais..." />
          </label>

          <label>
            TELEFONE
            <input type="tel" placeholder="(11) 99999-9999" />
          </label>

          <label>
            JÁ FOI ALUNO DO FREI?
            <select>
              <option>Selecione</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </label>

          <label>
            CPF <span>*</span>
            <input type="text" placeholder="000.000.000-00" />
          </label>

          <button type="submit" className="inscricao__btn">
            INSCREVER-SE
          </button>
        </form>
      </div>
    </div>
  );
}

export default Inscricao;
