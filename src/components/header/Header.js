import React from 'react';
import { CartWidgetApp } from '../cart/CartWidget';
import img from '../../assets/images';
import './header.scss';
import { NavBar } from '../nav-bar/NavBar';
import { UserSesion } from './UserSesion';
import { Link } from 'react-router-dom';
export const HeaderApp = () => {
  return (
    <section className="header">
      <div className="header__navBar">
        <NavBar />
      </div>
      <Link to="./" className="header__logo">
        <img src={img.logo} alt="inicio" />
      </Link>
      <div className="header__cart">
        <CartWidgetApp />
      </div>
      <div className="header__searchBar">
        <input
          className="header__searchBar--input"
          type="text"
          placeholder="¿Qué estas buscando?"
        />
        <img
          className="header__searchBar--icon"
          src={img.searchIcon}
          alt="Buscar"
        />
      </div>
      <div className="header__client">
        <UserSesion />
      </div>
    </section>
  );
};
