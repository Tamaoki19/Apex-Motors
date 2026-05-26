import React from 'react';
import './Footer.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="apex-footer">
      <div className="footer-container">
        
        <div className="footer-brand">
          <span className="brand-logo">Apex<span className="logo-dot">Motors</span></span>
          <p>A melhor plataforma para encontrar e simular a compra do seu próximo supercarro esportivo ou de luxo.</p>
        </div>

        <div className="footer-links-group">
          <div className="footer-column">
            <h3>Navegação</h3>
            <ul>
              <li><a href="#dash">Dashboard</a></li>
              <li><a href="#favorites">Favoritos</a></li>
              <li><a href="#ajuda">Suporte & Ajuda</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Categorias</h3>
            <ul>
              <li><a href="#sport">Sport</a></li>
              <li><a href="#luxury">Luxury</a></li>
              <li><a href="#suv">SUV</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Desenvolvedores</h3>
            <ul>
              <li><a href="https://github.com/Tamaoki19">Octavio Tamaoki</a></li>
              <li><a href="https://github.com/caetano991">Miguel Caetano</a></li>
              
            </ul>
          </div>
        </div>
        

        

      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Apex Motors. Todos os direitos reservados.</p>
        <p className="footer-dev">Desenvolvido com React</p>
      </div>
    </footer>
  );
}