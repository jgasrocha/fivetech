import React, { useState } from 'react';
import Navbar from '../components/Navbar/NavBar';
import Footer from '../components/Footer/Footer';
import ProjectCard from '../components/Projects/ProjectCard';
import ServiceCard from '../components/Services/ServiceCard';
import TechnologiesCard from '../components/Technologies/TechnologiesCard.jsx';
import Contact from '../components/Contact/Contact.jsx';
import LogoFivetec from '../assets/logoAtual.png';
import Projeto1 from '../assets/proj1.png';
import Projeto2 from '../assets/proj2.png';
import Projeto3 from '../assets/proj3.png';
import Projeto4 from '../assets/proj4.png';
import Web from '../assets/web.png';
import Games from '../assets/game-development.png';
import Mobile from '../assets/Mobile.png';
import Laravel from '../assets/laravel2.svg';
import Unity from '../assets/unity.svg';
import ReactJs from '../assets/react.svg';
import Django from '../assets/django.svg';
import Vue from '../assets/vue.svg';
import Flutter from '../assets/flutter.svg';

import Gabriel from '../assets/joaogabriel.jpg';
import Guilherme from '../assets/guilherme.png';
import Lucas from '../assets/lucas.png';
import './portifolio.css';

const Portfolio = () => {
  const initialProjects = [
    {
      title: 'Projeto 1',
      description: 'SIGEA - Sistema de Gestão Educacional de Aulas',
      image: Projeto1
    },
    {
      title: 'Projeto 2',
      description: 'InterageTEA - Jogo Educativo focado em interações para estudantes com Transtorno do Espectro Autista',
      image: Projeto2
    },
    {
      title: 'Projeto 3',
      description: 'Edit Quiz - Aplicativo móvel para criação e edição de quizzes',
      image: Projeto3
    }

  ];

  const allProjects = [
    ...initialProjects,
    {
      title: 'Projeto 4',
      description: 'Número nas estrelas - Jogo de matemática para crianças',
      image: Projeto4
    },
  ];

  const initialServices = [
    {
      image: Web,
      title: 'Desenvolvimento Web',
      subtitle: 'Criamos sites responsivos, modernos e sob medida para seu negócio.'
    },
    {
      image: Games,
      title: 'Desenvolvimento de Games',
      subtitle: 'Games envolventes e interativos para todas as plataformas.'
    },
    {
      image: Mobile,
      title: 'Desenvolvimento de Aplicativos',
      subtitle: 'Aplicativos Android personalizados para atender às suas necessidades.'
    }
  ];

  const initialTechnologies = [
    {
      image: Laravel,
      title: 'Laravel',
    },
    {
      image: Unity,
      title: 'Unity',
    },
    {
      image: ReactJs,
      title: 'ReactJs',
    },
    {
      image: Django,
      title: 'Django',
    },
    {
      image: Vue,
      title: 'VueJs',
    },
    {
      image: Flutter,
      title: 'Flutter',
    },
  ];

  const teamMembers = [
    { name: 'João Gabriel', position: 'CEO', image: Gabriel },
    { name: 'Guilherme Teles', position: 'Design Lead', image: Guilherme },
    { name: 'Mário Júnior', position: 'CTO', image: 'https://i.pravatar.cc/150?img=3' },
    { name: 'Lucas Silva', position: 'Marketing', image: Lucas },
    { name: 'Wilton Nascimento', position: 'Developer', image: 'https://i.pravatar.cc/150?img=4' },
  ];

  const [visibleProjects, setVisibleProjects] = useState(initialProjects);
  const [visibleServices, setVisibleServices] = useState(initialServices);
  const [visibleTechnologies, setVisibleTechnologies] = useState(initialTechnologies);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllTechnologies, setShowAllTechnologies] = useState(false);
  const [showAllServices, setShowAllServices] = useState(false);

  const toggleProjects = () => {
    setShowAllProjects(!showAllProjects);
    setVisibleProjects(showAllProjects ? initialProjects : allProjects);
  };

  const toggleServices = () => {
    setShowAllServices(!showAllServices);
    setVisibleServices(showAllServices ? initialServices : allServices);
  };
  const toggleTechnologies = () => {
    setShowAllTechnologies(!showAllTechnologies);
    setVisibleTechnologies(showAllTechnologies ? initialTechnologies : allServices);
  };

  return (
    <div className="portfolio-container">
      <Navbar />

      <main className="portfolio-main">
        {/* Seção Home */}
        <section id="home" className="section-with-bg">
          <div className="section-bg-container portfolio-header">
            <div className="company-presentation">
              <img src={LogoFivetec} alt="Fivetec Logo" className="company-logo" />
              <div className="company-description">
                <p className="section-subtitle fivetec-description">
                  {<p className="section-subtitle fivetec-description">
                    A <strong>Fivetech</strong> é uma empresa de tecnologia especializada no desenvolvimento de <strong>soluções digitais</strong>, oferecendo serviços completos nas áreas de <strong>criação de sites</strong>, <strong>desenvolvimento de jogos eletrônicos</strong> e <strong>aplicativos para Android</strong>.
                    <br /><br />
                    Nossa atuação abrange todas as etapas do projeto, desde a concepção inicial até a entrega final, sempre com foco em <strong>inovação</strong>, <strong>qualidade</strong> e <strong>eficiência</strong>.
                    <br /><br />
                    Fundada com o propósito de <em>tornar realidade o sonho de ter uma presença online</em>, a Fivetech nasceu para atender pessoas e empresas que desejam transformar ideias em produtos digitais modernos, funcionais e personalizados.
                    <br /><br />
                    Comprometemo-nos com a <strong>excelência técnica</strong>, a <strong>escuta ativa</strong> de nossos clientes e a entrega de soluções que realmente fazem a diferença no cenário digital atual.
                    <br /><br />
                    <strong>Fivetech — Conectando o seu projeto ao mundo.</strong>
                  </p>}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Projetos */}
        <section id="projects" className="section-with-bg">
          <div className="section-bg-container">
            <div className="section-header">
              <h3 className="section-title">Projetos</h3>
              <button onClick={toggleProjects} className="view-all-btn">
                {showAllProjects ? 'Show Less' : 'View All Projects'}
              </button>
            </div>
            <div className="projects-grid">
              {visibleProjects.map((project, idx) => (
                <ProjectCard key={idx} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Seção Serviços */}
        <section id="services" className="section-with-bg">
          <div className="section-bg-container">
            <div className="section-header">
              <h3 className="section-title">Principais Servicos</h3>
            </div>
            <div className="services-grid">
              {visibleServices.map((service, idx) => (
                <ServiceCard key={idx} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Seção Tecnologias */}
        <section id="technologies" className="section-with-bg">
          <div className="section-bg-container">
            <div className="section-header">
              <h3 className="section-title">Tecnologias mais utilizadas</h3>
            </div>
            <div className="technologies-section">
              <div className="technologies-container">
                {[...visibleTechnologies, ...visibleTechnologies].map((technology, idx) => (
                  <TechnologiesCard key={`${idx}-${technology.title}`} {...technology} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Seção Time */}
        <section id="team" className="section-with-bg">
          <div className="section-bg-container">
            <h3 className="section-title">Time FIVE</h3>
            <div className="team-grid">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="team-card">
                  <div className="team-avatar">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="avatar-image"
                    />
                  </div>
                  <div className="team-info">
                    <h4 className="team-name">{member.name}</h4>
                    <p className="team-position">{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;