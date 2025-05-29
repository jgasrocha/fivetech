import React, { useState, useEffect } from 'react';
import logoImage from "../../assets/logoNova.png";
import './navbar.css';

export default function NavBar() {
    const [activeSection, setActiveSection] = useState('home');
    const [showContact, setShowContact] = useState(false);

    const handleScroll = () => {
        const sections = ['home', 'projects', 'services', 'team', 'contact'];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
                const { offsetTop, offsetHeight } = element;
                if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                    setActiveSection(section);
                    setShowContact(section === 'contact');
                    break;
                }
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo" onClick={() => scrollToSection('home')}>
                    <img src={logoImage} alt="Logo" className="logo-image" />
                </div>
                
                <div className="nav-links">
                    <a 
                        onClick={() => scrollToSection('home')} 
                        className={activeSection === 'home' ? 'active' : ''}
                        style={{ cursor: 'pointer' }}
                    >
                        Início
                    </a>
                    <a 
                        onClick={() => scrollToSection('projects')} 
                        className={activeSection === 'projects' ? 'active' : ''}
                        style={{ cursor: 'pointer' }}
                    >
                        Projetos
                    </a>
                    <a 
                        onClick={() => scrollToSection('services')} 
                        className={activeSection === 'services' ? 'active' : ''}
                        style={{ cursor: 'pointer' }}
                    >
                        Servicos
                    </a>
                    <a 
                        onClick={() => scrollToSection('team')} 
                        className={activeSection === 'team' ? 'active' : ''}
                        style={{ cursor: 'pointer' }}
                    >
                        Time
                    </a>
                    <a 
                            onClick={() => scrollToSection('contact')} 
                            className="contact-link"
                            style={{ cursor: 'pointer' }}
                        >
                            Contato
                        </a>
                </div>
            </div>
        </nav>
    )
}