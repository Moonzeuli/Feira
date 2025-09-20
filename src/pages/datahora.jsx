import React from "react";
import { Link } from "react-router-dom";
import "../styles/datahora.css";

function DataHora() {
  return (
    <div className="dataHoraPage">

        {/* Cabeçalho */}
        <header className="nav">
        <img src="logo.jpg" alt="logo" width="40" />
        
        <nav className="menu">
            <Link to="/">página inicial</Link>
          <Link to="/cursos">cursos</Link>
          <Link to="/andar">atrações</Link>
          <Link to="/inscricao">inscrição</Link>
          <Link to="/login">login</Link>
           <Link to="/vincular">vincular e buscar visitante</Link>
        </nav>
       
        <img src="icone.png" alt="icone" width="40"  />
      </header>

      <div className="dataHoraContainer">
        {/* Fundo */}
        <div className="dataHoraBackground"></div>

        {/* Título */}
        <h1 className="dataHoraTitle">Data e Local</h1>

        {/* Texto principal */}
        <p className="dataHoraDate">
          Dia 27 de setembro<br />
          Sábado<br />
          Das 09hrs às 16hrs
        </p>

        {/* Endereço */}
        <p className="dataHoraAddress">
          Av. Cel. Octaviano de Freitas Costa, 463<br />
          Veleiros - São Paulo - SP 04773-000
        </p>

        {/* Bolinhas decorativas */}
        <div className="dataHoraDots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>

      
        <div className="dataHoraPolygons">
          <img src="./mapa.webp" alt="mapa" className="mapa" />
        </div>

 <img className="data-tri" src="/tri-azul.png" alt="" />

       
      </div>

   
            </div>

)

}

export default DataHora;



