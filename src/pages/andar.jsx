import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/andar.css';

const Andar = () => {
  return (
    <>
      <header className="nav">
        <img src="logo.jpg" alt="logo" width="40" />
        
        <nav className="menu">
          <Link to="/">página inicial</Link>
           <Link to="/data">data e hora</Link>
          <Link to="/cursos">cursos</Link>
          <Link to="/data">data e hora</Link>
          <Link to="/inscricao">inscrição</Link>
          <Link to="/login">login</Link>
           <Link to="/vincular">vincular e buscar visitante</Link>
        </nav>
       
        <img src="icone.png" alt="icone" width="40"  />
      </header>

      {/* 🔵 Primeiro Andar */}
      <section className="atracoes-layout">
        <div className="coluna-esquerda">
          <h2>
            Atrações – <span className="destaque-amarelo">Primeiro</span> Andar
          </h2>
       
          <img src="/andar1.jpg" alt="Interação com visitante" />
        </div>

        <div className="coluna-direita">
          <div className="lista-amarela">
            <ul>
              <li>Lorem Ipsum Dolot Simet</li>
              <li>Lorem Ipsum Dolot Simet</li>
              <li>Lorem Ipsum Dolot Simet</li>
              <li>Lorem Ipsum Dolot Simet</li>
              <li>Lorem Ipsum Dolot Simet</li>
              <li>Lorem Ipsum Dolot Simet</li>
              <li>Lorem Ipsum Dolot Simet</li>
              <li>Lorem Ipsum Dolot Simet</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 🟨 Segundo Andar */}
      <section className="segundo-andar-layout">
        <div className="segundo-coluna-esquerda">
          <div className="lista-amarela">
            <ul>
              <li>Lorem Ipsum Dolot Simet</li>
              <li>Lorem Ipsum Dolot Simet</li>
              <li>Lorem Ipsum Dolot Simet</li>
              <li>Lorem Ipsum Dolot Simet</li>
              <li>Lorem Ipsum Dolot Simet</li>
              <li>Lorem Ipsum Dolot Simet</li>
              <li>Lorem Ipsum Dolot Simet</li>
              <li>Lorem Ipsum Dolot Simet</li>
              <li>Lorem Ipsum Dolot Simet</li>
              <li>Lorem Ipsum Dolot Simet</li>
            </ul>
          </div>
        </div>

        <div className="segundo-coluna-direita">
          <h2>
            Atrações – <span className="destaque-azul">Segundo</span> Andar
          </h2>
          <img src="/2andar.jpg" alt="Interação com visitante" />
          <img src="/andar2.jpg" alt="Doces e brindes" />
        </div>
      </section>

         {/* 🔷 Terceiro Andar */}
      <section className="terceiro-andar-layout">

        <div className="terceiro-coluna-esquerda">

          <h2>Atrações – <span className="destaque-amarelo">Terceiro</span> Andar</h2>
          <img src="/3andar.jpg" alt="Imagem do terceiro andar 1" />
          <img src="/andar3.jpg" alt="Imagem do terceiro andar 2" />
        </div>

        <div className="terceiro-coluna-direita">
          <div className="lista-amarela">
            <ul>
             <li>Lorem Ipsum Dolot Simet</li>
              <li>Lorem Ipsum Dolot Simet</li>
              <li>Lorem Ipsum Dolot Simet</li>
              <li>Lorem Ipsum Dolot Simet</li>
              <li>Lorem Ipsum Dolot Simet</li>
              <li>Lorem Ipsum Dolot Simet</li>
              <li>Lorem Ipsum Dolot Simet</li>
              <li>Lorem Ipsum Dolot Simet</li>
              <li>Lorem Ipsum Dolot Simet</li>
              <li>Lorem Ipsum Dolot Simet</li>
            </ul>
          </div>
        </div>

    



      </section>

 
    


    </>

    
    
  );
};

export default Andar;
