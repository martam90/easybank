import React, { useState } from 'react';
import './style.scss';
import logo from '../../images/logo.svg';
import hamburgerIcon from '../../images/icon-hamburger.svg';
import closeHamburgerIcon from '../../images/icon-close.svg';
import menuItems from '../../assets/menuItems';


const Header = () => {

  // isOpen - stavova promenna, initial value je false (resp. cokoliv co je argumentem useState())
  // setIsOpen - funkce, ktera zmeni hodnotu isOpen a vyvola prekresleni stranky
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="container">
      <div className="header__top">
        <a href='/'><img src={logo} alt="easybank logo"/></a>
        <button className={isOpen ? 'nav__btn--open' : 'nav__btn'} onClick={toggleMenu}>
          <img className="nav__icon--open" src={hamburgerIcon} alt="hamburger menu opening icon"></img>
          <img className="nav__icon--close" src={closeHamburgerIcon} alt="hamburger menu closing icon"></img>
        </button>
      </div>
      <nav className={isOpen ? 'nav nav--open' : 'nav'}>
        <ul className="nav__list">
        {menuItems.map((item) => (
          <li className="nav__item" key={item.id}>
            <a href="/" className="nav__link">{item.name}</a>
          </li>
          ))}
        </ul>
      </nav>
        <a className="cta cta--hidden cta--hidden-header" href="/">Request invite</a>
    </header>
  );
};

export default Header;
