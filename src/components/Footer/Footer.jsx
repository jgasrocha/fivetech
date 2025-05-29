import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>FIVETECH</h2>
          <p>Conectando o seu projeto ao mundo.</p>
        </div>

        <div className="footer-links">
          <h4>Links úteis</h4>
          <ul>
            <li><a href="#home">Início</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#team">Time</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contato</h4>
          <p>Email: contato@fivetech.com</p>
          <p>Telefone: (99) 99999-9999</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FIVETECH. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
