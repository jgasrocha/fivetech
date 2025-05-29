import React from 'react';
import { FaInstagram, FaWhatsapp, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const contacts = [
    {
      name: 'Instagram',
      icon: <FaInstagram size={24} />,
      url: 'https://instagram.com/seuinstagram',
      color: '#E1306C'
    },
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp size={24} />,
      url: 'https://wa.me/+557491072154',
      color: '#25D366'
    },
    {
      name: 'Email',
      icon: <FaEnvelope size={24} />,
      url: 'mailto:gabrieldeveloper33@gmail.com?subject=Contato%20via%20Portfólio',
      color: '#D44638'
    },
    {
      name: 'Facebook',
      icon: <FaFacebook size={24} />,
      url: 'https://facebook.com/seufacebook',
      color: '#1877F2'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Entre em Contato</h2>
      <p className="section-subtitle">Nos siga nas redes sociais ou envie uma mensagem</p>
      
      <div className="contact-grid">
        {contacts.map((contact, index) => (
          <a 
            key={index}
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            style={{ '--contact-color': contact.color }}
          >
            <div className="contact-icon">{contact.icon}</div>
            <span className="contact-name">{contact.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;