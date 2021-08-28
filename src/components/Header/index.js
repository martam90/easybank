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
    setIsOpen(!isOpen);
  }

  return (
    <header>
      <div className="header__top">
        <a href='#'><img src={logo} /></a>
        <button className={isOpen ? 'nav__btn--open' : 'nav__btn'} onClick={toggleMenu}>
          <img className="nav__icon--open" src={hamburgerIcon}></img>
          <img className="nav__icon--close" src={closeHamburgerIcon}></img>
        </button>
      </div>
      <nav className={isOpen ? 'nav nav--open' : 'nav'}>
        <ul className="nav__list">
        {menuItems.map((item) => (
          <li className="nav__item" key={item.id}>
            <a className="nav__link">{item.name}</a>
          </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
