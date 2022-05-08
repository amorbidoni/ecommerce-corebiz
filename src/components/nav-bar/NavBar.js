import React from 'react';
import './navBar.scss';
export const NavBar = () => {
  return (
    <nav className="navigation">
      <input
        type="checkbox"
        name=""
        id="navi-toggle"
        className="navigation__checkbox"
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav"></nav>
    </nav>
  );
};
