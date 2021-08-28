import React from 'react';
import './style.scss';
import logo from '../../images/logo.svg';
import footerMenu from '../../assets/footerMenu';
import footerIcons from '../../assets/footerIcons';

const Footer = () => {
  return (
    <footer className="footer">
      <a href="#">
        <img className="footer__logo" src={logo}></img>
      </a>

      <ul className="footer__icons-list">
      {footerIcons.map((item) => (
        <li className="footer__icons-item" key={item.id}>
          <a href="#" className="footer__icons-link">
            <img src={item.source} alt={item.alt}></img>
          </a>
        </li>
      ))}
      </ul>

      <ul className="footer__list">
        {footerMenu.map((item) => (
          <li className="footer__item" key={item.id}>
            <a className="footer__link" href="#">{item.name}</a>
          </li>
        ))}
      </ul>
      <a href="#" className="cta">Request Invite</a>

      <span className="footer__copyright">© Easybank. All Rights Reserved</span>
      
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/martam90">Marta</a>.
      </div> 
    </footer>
  );
};


export default Footer;


