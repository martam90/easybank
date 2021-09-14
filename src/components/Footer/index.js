import React from 'react';
import './style.scss';
import logo from '../../images/logo.svg';
import footerMenu from '../../assets/footerMenu';
import footerIcons from '../../assets/footerIcons';

const Footer = () => {
  return (
    <footer>
      <div className="footer container">
        <a href="/" className="footer__logo--wrapper">
          <img className="footer__logo" src={logo} alt="easybank logo"></img>
        </a>

        <ul className="footer__icons-list">
        {footerIcons.map((item) => (
          <li className="footer__icons-item" key={item.id}>
            <a href="/" className="footer__icons-link">
              <img className="footer__icon" src={item.source} alt={item.alt}></img>
            </a>
          </li>
        ))}
        </ul>
    

        <ul className="footer__list">
          {footerMenu.map((item) => (
            <li className="footer__item" key={item.id}>
              <a className="footer__link" href="/">{item.name}</a>
            </li>
          ))}
        </ul>
        <a href="/" className="cta cta__footer">Request Invite</a>

        <span className="footer__copyright">© Easybank. All Rights Reserved</span>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" className="attribution__link">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/martam90" className="attribution__link">Marta</a>.
      </div>
    </div> 
    </footer>
  );
};


export default Footer;


