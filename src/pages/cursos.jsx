import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { Link } from 'react-router-dom'; 
import "../styles/cursos.css";

function Cursos() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "CURSOS",
      content: "Saiba mais sobre os cursos que apresentaremos em nossa feira!",
      bgImage: "url('/cursos.jpg')",
      overlay: "linear-gradient(90deg, rgba(255, 225, 70, 0) 0%, rgba(0, 0, 0, 0.5) 63.46%)"
    },
    {
      title: "INFORMÁTICA",
      content: "O curso técnico em Informática prepara o aluno para atuar em duas áreas principais: Hardware e Software. Em Hardware, o aluno aprenderá sobre montagem e manutenção de microcomputadores e gestão de redes. Em Software, o foco será no desenvolvimento de sistemas e programas, além de interagir com banco de dados por meio de linguagens de programação.",
      bgImage: "url('/info.jpeg')",
      overlay: "linear-gradient(180deg, rgba(1, 42, 74, 0.7) 0%, rgba(106, 171, 218, 0.7) 78.37%)"
    },
    {
      title: "ELETROMECÂNICA",
      content: "O curso capacita o aluno a realizar manutenções preventivas e corretivas em veículos automotores, abrangendo conhecimentos nas áreas de elétrica, eletrônica e mecânica automotiva. Espera-se que o profissional atue de forma ética, comunicativa, responsável, e com iniciativa.",
      bgImage: "url('/meca.jpg')",
      overlay: "linear-gradient(180deg, rgba(74, 1, 1, 0.7) 0%, rgba(218, 106, 106, 0.7) 73.56%)"
    },
    {
      title: "COMUNICAÇÃO VISUAL",
      content: "O curso capacita o aluno para atuar no desenvolvimento de projetos gráficos, criação de peças publicitárias, marketing digital, fotografia e edição de vídeo. O profissional será preparado para trabalhar na criação de conteúdo visual criativo, como anúncios e campanhas de marketing, além de gerir redes sociais, promovendo a comunicação entre empresas e seus públicos.",
      bgImage: "url('/cv.jpg')",
      overlay: "linear-gradient(180deg, rgba(123, 5, 76, 0.7) 0%, rgba(218, 106, 168, 0.7) 73.56%)"
    },
    {
      title: "INGLÊS",
      content: "Ter conhecimento em inglês é essencial para quem busca oportunidades no mercado de trabalho atual. Pensando nisso, desenvolvemos o curso 'English in Action', que foca em desenvolver as quatro habilidades da comunicação: fala, escrita, leitura e audição. O curso é dividido em três módulos: Beginners, Elementary e Pre-Intermediate, utilizando materiais da MMPUBLICATIONS e apostilas desenvolvidas pela equipe do Instituto.",
      bgImage: "url('/ingles.JPG')",
      overlay: "linear-gradient(180deg, rgba(41, 5, 123, 0.7) 0%, rgba(96, 68, 162, 0.35) 73.56%)"
    },
    {
      title: "ADMINISTRAÇÃO",
      content: "Domine a criação e gestão de bancos de dados relacionais e não relacionais.",
      bgImage: "url('/adm.jpg')",
      overlay: "linear-gradient(180deg, rgba(65, 61, 139, 0.7) 0%, rgba(110, 104, 212, 0.35) 73.56%)"
    },
    {
      title: "AUTOMAÇÃO E ROBÓTICA",
      content: "O curso capacita o aluno a atuar na automação residencial e robótica, realizando a instalação e manutenção de sistemas de iluminação, segurança e internet das coisas (IOT), além de programar robôs para aplicações comerciais e industriais. O profissional estará apto para montagem de componentes e equipamentos elétricos.",
      bgImage: "url('/robo.JPG')",
      overlay: "linear-gradient(180deg, rgba(253, 197, 0, 0.7) 0%, rgba(255, 225, 70, 0.35) 73.56%)"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Configuração do swipe
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div>
      {/* Header com navegação */}
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

      {/* Conteúdo principal */}
      <div className="curso">
        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="rectangle"></div>
           
            
            <div className="div">
              <div className="group">
                <div className="overlap-group">
                  <div className="rectangle-2"></div>
                  <img className="polygon" src="/tri-amarelo.png" alt="Polygon" />
                
                </div>
              </div>
            </div>
            
         
            <img className="logo-frei-2" src="/selo.png" alt="Logo Frei" />
            
            {/* Carrossel com Swipe */}
            <div className="carousel-container">
              <div className="carousel-wrapper" {...swipeHandlers}>
                <div 
                  className="carousel-track" 
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {slides.map((slide, index) => (
                    <div 
                      key={index} 
                      className="slide"
                      style={{ 
                        background: `${slide.overlay}, ${slide.bgImage}`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      <div className="slide-content">
                        <h3>{slide.title}</h3>
                        <p>{slide.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="carousel-nav">
                <button className="nav-btn" onClick={prevSlide}>
                  &lt;
                </button>
                <button className="nav-btn" onClick={nextSlide}>
                  &gt;
                </button>
              </div>
              
              <div className="pagination">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`pagination-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cursos;